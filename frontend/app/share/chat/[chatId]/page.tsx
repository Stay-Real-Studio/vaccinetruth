"use client";

import { ChatDialogueArea } from "./components/ChatDialogueArea/ChatDialogue";

const SelectedChatPage = (): JSX.Element => {
  return (
    <div
      className={`flex flex-col flex-1 items-center justify-stretch w-full h-fill-available overflow-hidden  dark:bg-black transition-colors ease-out duration-500`}
      data-testid="chat-page"
    >
      <div
        className={`flex flex-col flex-1 w-full max-w-5xl h-full dark:shadow-primary/25 overflow-hidden p-2 sm:p-4 md:p-6 lg:p-8`}
      >
        <div className="flex flex-1 flex-col overflow-y-auto">
          <ChatDialogueArea />
        </div>
      </div>
    </div>
  );
};

export default SelectedChatPage;
