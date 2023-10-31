import { Fragment } from "react";

import { useChatInput } from "@/app/chat/[chatId]/components/ActionsBar/components/VTChatInput/hooks/useChatInput";
import { useChat } from "@/app/chat/[chatId]/hooks/useChat";
import { useOnboarding } from "@/lib/hooks/useOnboarding";

import { QuestionId } from "../../types";
// eslint-disable-next-line import/order
import { useOnboardingQuestion } from "./hooks/useOnboardingQuestion";
// import { useMentionState } from "@/app/chat/[chatId]/components/ActionsBar/components/VTChatInput/components/ChatBar/components/MentionInput/hooks/helpers/MentionState";

type OnboardingQuestionsProps = {
  questionId: QuestionId;
};

export const OnboardingQuestion = ({
  questionId,
}: OnboardingQuestionsProps): JSX.Element => {
  const { onboarding } = useOnboarding();
  const { question } = useOnboardingQuestion(questionId);
  const { setMessage } = useChatInput();
  const { addQuestion, generatingAnswer } = useChat();

  if (!onboarding[questionId]) {
    return <Fragment />;
  }

  const generateBoardingChat = () => {
    if (!generatingAnswer) {
      void addQuestion(question, () => setMessage(""));
    }
  };

  return (
    <div
      onClick={() => void generateBoardingChat()}
      className={`${
        generatingAnswer ? "text-gray-300 animate-spin" : ""
      } cursor-pointer shadow-md dark:shadow-primary/25 hover:shadow-xl transition-shadow bg-onboarding-yellow-bg px-3 py-1 rounded-xl border-black/10 dark:border-white/25 dark:text-black`}
    >
      {question}
    </div>
  );
};
