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
          <div className="fixed z-10 right-4 top-4">
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
          className=" fixed z-50 right-1/2 sm:right-[200px] bottom-16 border rounded-full p-2"
          onClick={() => scrollToBottom()}
        >
          <BsArrowDown />
        </button>
      )}
    </div>
  );
};
