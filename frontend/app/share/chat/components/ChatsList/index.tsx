"use client";

import { useChatNotificationsSync } from "./hooks/useChatNotificationsSync";

export const ChatsList = (): JSX.Element => {
  // useChatsList();
  useChatNotificationsSync();
  // const { shouldDisplayWelcomeChat } = useOnboarding();

  return (
    <></>
    // <Sidebar showButtons={["myBrains", "upgradeToPlus", "user"]}>
    //   <div className="flex flex-col flex-1 h-full" data-testid="chats-list">
    //     <div className="pt-2">
    //       <NewChatButton />
    //     </div>
    //     {shouldDisplayWelcomeChat && (
    //       <div className="pt-2">
    //         <WelcomeChat />
    //       </div>
    //     )}
    //     <ChatHistory />
    //   </div>
    // </Sidebar>
  );
};
