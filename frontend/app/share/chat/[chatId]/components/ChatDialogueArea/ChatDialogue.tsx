import { useChatContext } from "@/lib/context";

import { ChatDialogue } from "./components/ChatDialogue";
import { getMergedChatMessagesWithDoneStatusNotificationsReduced } from "./utils/getMergedChatMessagesWithDoneStatusNotificationsReduced";

export const ChatDialogueArea = (): JSX.Element => {
  const { messages, notifications } = useChatContext();

  const chatItems = getMergedChatMessagesWithDoneStatusNotificationsReduced(
    messages,
    notifications
  );

  return <ChatDialogue chatItems={chatItems} />;
};
