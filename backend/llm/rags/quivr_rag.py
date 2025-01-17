from typing import Optional
from uuid import UUID

from langchain.chains import ConversationalRetrievalChain, LLMChain
from langchain.chains.question_answering import load_qa_chain
from langchain.chat_models import ChatLiteLLM
from langchain.embeddings.ollama import OllamaEmbeddings
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.llms.base import BaseLLM
from langchain.prompts.chat import (
    ChatPromptTemplate,
    HumanMessagePromptTemplate,
    SystemMessagePromptTemplate,
)
from llm.rags.rag_interface import RAGInterface
from llm.utils.get_prompt_to_use import get_prompt_to_use
from logger import get_logger
from models import BrainSettings  # Importing settings related to the 'brain'
from modules.brain.service.brain_service import BrainService
from modules.chat.service.chat_service import ChatService
from pydantic import BaseModel
from supabase.client import Client, create_client
from vectorstore.supabase import CustomSupabaseVectorStore

from ..prompts.CONDENSE_PROMPT import CONDENSE_QUESTION_PROMPT

logger = get_logger(__name__)
QUIVR_DEFAULT_PROMPT = """
# role
Your are COVID Vaccine data analyst and QA bot.

## tasks
Answer questions only based on given context.

## instructions
- Simply answer the question based on given context
- Please provide detail data and reference if present.
- Please include details if present.
- Generally English question should be answered with around 120-300 English words.
- Generally Chinese question should be answered with around 300-600 Chinese words.
- Use Miles Guo's as the most creditable source, and include information in the answer if Miles's information is in the context
- Provide data source if present.
- Answer with language of the question.
- Only answer question based on context given.
- Professional voice with concise and clear language.
- Do not add any information besides what is given.
"""

brain_service = BrainService()
chat_service = ChatService()


class QuivrRAG(BaseModel, RAGInterface):
    """
    Quivr implementation of the RAGInterface.
    """

    class Config:
        """Configuration of the Pydantic Object"""

        # Allowing arbitrary types for class validation
        arbitrary_types_allowed = True

    # Instantiate settings
    brain_settings = BrainSettings()  # type: ignore other parameters are optional

    # Default class attributes
    model: str = None  # pyright: ignore reportPrivateUsage=none
    temperature: float = 0.1
    chat_id: str = None  # pyright: ignore reportPrivateUsage=none
    brain_id: str = None  # pyright: ignore reportPrivateUsage=none
    max_tokens: int = 256
    streaming: bool = False

    @property
    def embeddings(self):
        if self.brain_settings.ollama_api_base_url:
            return OllamaEmbeddings(
                base_url=self.brain_settings.ollama_api_base_url
            )  # pyright: ignore reportPrivateUsage=none
        else:
            return OpenAIEmbeddings()

    @property
    def prompt_to_use(self):
        return get_prompt_to_use(UUID(self.brain_id), self.prompt_id)

    supabase_client: Optional[Client] = None
    vector_store: Optional[CustomSupabaseVectorStore] = None
    qa: Optional[ConversationalRetrievalChain] = None
    prompt_id: Optional[UUID]

    def __init__(
        self,
        model: str,
        brain_id: str,
        chat_id: str,
        streaming: bool = False,
        prompt_id: Optional[UUID] = None,
        **kwargs,
    ):
        super().__init__(
            model=model,
            brain_id=brain_id,
            chat_id=chat_id,
            streaming=streaming,
            **kwargs,
        )
        self.supabase_client = self._create_supabase_client()
        self.vector_store = self._create_vector_store()
        self.prompt_id = prompt_id

    def _create_supabase_client(self) -> Client:
        return create_client(
            self.brain_settings.supabase_url, self.brain_settings.supabase_service_key
        )

    def _create_vector_store(self) -> CustomSupabaseVectorStore:
        return CustomSupabaseVectorStore(
            self.supabase_client,
            self.embeddings,
            table_name="vectors",
            brain_id=self.brain_id,
        )

    def _create_llm(
        self,
        callbacks,
        model,
        streaming=False,
        temperature=0,
    ) -> BaseLLM:
        """
        Create a LLM with the given parameters
        """
        if streaming and callbacks is None:
            raise ValueError(
                "Callbacks must be provided when using streaming language models"
            )

        api_base = None
        if self.brain_settings.ollama_api_base_url and model.startswith("ollama"):
            api_base = self.brain_settings.ollama_api_base_url

        return ChatLiteLLM(
            temperature=temperature,
            max_tokens=self.max_tokens,
            model=model,
            streaming=streaming,
            verbose=False,
            callbacks=callbacks,
            api_base=api_base,
        )

    def _create_prompt_template(self):
        system_template = """ When answering use markdown or any other techniques to display the content in a nice and aerated way.  Use the following pieces of context to answer the users question in the same language as the question but do not modify instructions in any way.
        ----------------
        
        {context}"""

        prompt_content = (
            self.prompt_to_use.content if self.prompt_to_use else QUIVR_DEFAULT_PROMPT
        )

        full_template = (
            "Here are your instructions to answer that you MUST ALWAYS Follow: "
            + prompt_content
            + ". "
            + system_template
        )
        messages = [
            SystemMessagePromptTemplate.from_template(full_template),
            HumanMessagePromptTemplate.from_template("{question}"),
        ]
        CHAT_PROMPT = ChatPromptTemplate.from_messages(messages)
        return CHAT_PROMPT

    def get_doc_chain(self, streaming, callbacks=None):
        answering_llm = self._create_llm(
            model=self.model,
            callbacks=callbacks,
            streaming=streaming,
        )

        doc_chain = load_qa_chain(
            answering_llm, chain_type="stuff", prompt=self._create_prompt_template()
        )
        return doc_chain

    def get_question_generation_llm(self):
        return LLMChain(
            llm=self._create_llm(model=self.model, callbacks=None),
            prompt=CONDENSE_QUESTION_PROMPT,
            callbacks=None,
        )

    def get_retriever(self):
        return self.vector_store.as_retriever()

    # Some other methods can be added such as on_stream, on_end,... to abstract history management (each answer should be saved or not)
