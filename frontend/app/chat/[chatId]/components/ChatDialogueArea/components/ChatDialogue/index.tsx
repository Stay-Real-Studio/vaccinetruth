// import { BsArrowDown } from "react-icons/bs";

// eslint-disable-next-line import/order
import { ShareModal } from "@/app/chat/components/ShareChat/ShareModal";
import { BsArrowDown } from "react-icons/bs";

// eslint-disable-next-line import/order
import { ChatItemWithGroupedNotifications } from "../../types";
import { ChatItem } from "./components";
import { useChatDialogue } from "./hooks/useChatDialogue";
import {
  chatDialogueContainerClassName,
  chatItemContainerClassName,
} from "./styles";
import { getKeyFromChatItem } from "./utils/getKeyFromChatItem";

type MessagesDialogueProps = {
  chatItems: ChatItemWithGroupedNotifications[];
};

export const ChatDialogue = ({
  chatItems,
}: MessagesDialogueProps): JSX.Element => {
  const { chatListRef, scrollToBottom, visibleScrollBottonIcon } =
    useChatDialogue();

  return (
    <div className={chatDialogueContainerClassName} ref={chatListRef}>
      {chatItems.length > 0 && (
        <div>
          <div className="sm:hidden fixed top-0 left-0 w-full">
            <div className="bg-vt-50 dark:bg-vt-300 w-full flex justify-end p-2">
              <ShareModal />
            </div>
          </div>
          <div className="hidden sm:inline-block sm:fixed sm:z-10 sm:right-4 sm:top-4 ">
            <ShareModal />
          </div>

          <div className={chatItemContainerClassName}>
            {chatItems.map((chatItem) => (
              <ChatItem key={getKeyFromChatItem(chatItem)} content={chatItem} />
            ))}
          </div>
        </div>
      )}

      {visibleScrollBottonIcon && (
        <button
          className=" fixed z-50 right-1/2 sm:right-[200px] bottom-16 border rounded-full p-2 dark:text-vt-50 dark:sm:text-vt-700"
          onClick={() => scrollToBottom()}
        >
          <BsArrowDown />
        </button>
      )}
    </div>
  );
};
