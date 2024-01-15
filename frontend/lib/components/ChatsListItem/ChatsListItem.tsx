import Link from "next/link";
import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi";

import { ChatEntity } from "@/app/chat/[chatId]/types";
import { cn } from "@/lib/utils";

import { ChatName } from "./components/ChatName";
import { useChatsListItem } from "./hooks/useChatsListItem";

interface ChatsListItemProps {
  chat: ChatEntity;
  editable?: boolean;
  onDelete?: () => void;
}

export const ChatsListItem = ({
  chat,
  editable = true,
  onDelete,
}: ChatsListItemProps): JSX.Element => {
  const {
    setChatName,
    deleteChat,
    handleEditNameClick,
    selected,
    chatName,
    editingName,
  } = useChatsListItem(chat);

  return (
    <div
      className={cn(
        "w-full relative group hover:text-vt-900 dark:hover:text-vt-50 hover:font-medium flex overflow-x-hidden dark:bg-vt-100 dark:text-vt-700 hover:bg-vt-100 dark:hover:bg-vt-800",
        selected
          ? "bg-vt-100 dark:bg-vt-800 text-vt-950 dark:text-vt-50 font-medium "
          : ""
      )}
      data-testid="chats-list-item"
    >
      <Link
        className="flex flex-col flex-1 min-w-0 p-2 hover:text-vt-900 hover:font-medium"
        href={`/chat/${chat.chat_id}`}
        key={chat.chat_id}
      >
        <div className="flex items-center ">
          <ChatName
            setName={setChatName}
            editing={editingName}
            name={chatName}
          />
        </div>
      </Link>
      <div
        className={`absolute z-10 right-1 ${editingName ? "-top-1" : "-top-1"}`}
      >
        <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center bg-gradient-to-l from-vt-50 dark:from-vt-700 to-transparent z-10 transition-opacity">
          {editable && (
            <button
              className="p-0 hover:text-blue-700 dark:text-vt-50 dark:hover:text-blue-700"
              type="button"
              onClick={handleEditNameClick}
            >
              {editingName ? <FiSave /> : <FiEdit />}
            </button>
          )}
          <button
            className="p-2 hover:text-red-700 dark:text-vt-50 dark:hover:text-red-700"
            type="button"
            onClick={onDelete ?? (() => void deleteChat())}
            data-testid="delete-chat-button"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>

      {/* Fade to white */}
      <div
        aria-hidden
        className="not-sr-only absolute left-1/2 top-0 bottom-0 right-0 bg-gradient-to-r from-transparent to-vt-50 dark:to-vt-700 pointer-events-none"
      ></div>
    </div>
  );
};
