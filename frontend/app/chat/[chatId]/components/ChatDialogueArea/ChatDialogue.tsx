import { useFeatureIsOn } from "@growthbook/growthbook-react";

import { useChatContext } from "@/lib/context";

import { ChatDialogue } from "./components/ChatDialogue";
import { Disclaimer } from "./components/Disclaimer";
import { getMergedChatMessagesWithDoneStatusNotificationsReduced } from "./utils/getMergedChatMessagesWithDoneStatusNotificationsReduced";

export const ChatDialogueArea = (): JSX.Element => {
  const { messages, notifications } = useChatContext();

  const chatItems = getMergedChatMessagesWithDoneStatusNotificationsReduced(
    messages,
    notifications
  );
  const shouldDisplayOnboarding = useFeatureIsOn("onboarding");

  const shouldDisplayShortcuts =
    chatItems.length === 0 && !shouldDisplayOnboarding;

  if (!shouldDisplayShortcuts) {
    return (
      <div className="flex flex-col flex-1 overflow-y-auto mb-2">
        <div>
          <Disclaimer />
        </div>
        <ChatDialogue chatItems={chatItems} />
      </div>
    );
  }

  // return <ShortCuts />;
  return <></>;
};
