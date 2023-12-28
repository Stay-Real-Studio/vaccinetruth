from typing import List
from uuid import UUID

from fastapi import APIRouter, Depends
from middlewares.auth.auth_bearer import AuthBearer, get_current_user
from models.databases.supabase.shared_chats import CreateSharedChatProperties
from modules.chat.dto.chats import ChatItem
from modules.chat.service.chat_service import ChatService
from modules.user.entity.user_identity import UserIdentity

# from repository.chat.get_chat_history_with_notifications import ChatItem
from repository.shared_chat import (
    create_shared_chat,
    get_shared_chat_by_id,
)

shared_chat_router = APIRouter()
chat_service = ChatService()


@shared_chat_router.get("/shared/chat/{shared_chat_id}")
def get_shared_chat_identity_route(shared_chat_id: UUID) -> List[ChatItem]:
    """
    Get user identity.
    """
    chat_id = get_shared_chat_by_id(shared_chat_id)
    # chat = get_chat_by_id(chat_id)
    # chat_history = get_chat_history(chat_id)

    return chat_service.get_chat_history_with_notifications(chat_id)


@shared_chat_router.post("/shared/chat", dependencies=[Depends(AuthBearer())])
async def create_shared_chat_route(
    createSharedChatProps: CreateSharedChatProperties,
    current_user: UserIdentity = Depends(get_current_user),
):
    chat_to_share = chat_service.get_chat_by_id(createSharedChatProps.chat_id)

    # check if user is the owner of the chat
    # if not, raise error
    if chat_to_share.user_id != str(current_user.id):
        raise Exception("You are not the owner of this chat.")

    new_shared_chat = create_shared_chat(createSharedChatProps)

    return new_shared_chat
