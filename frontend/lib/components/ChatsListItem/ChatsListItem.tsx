import Link from "next/link";
import { FiEdit, FiSave, FiTrash2 } from "react-icons/fi";
import { MdChatBubbleOutline } from "react-icons/md";

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
        "w-full relative group hover:text-slate-900 dark:hover:text-white hover:font-medium flex overflow-x-hidden dark:bg-slate-100 dark:text-slate-700 hover:bg-gray-100 dark:hover:bg-gray-800",
        selected
          ? "bg-gray-100 dark:bg-gray-800 text-slate-950 dark:text-white font-medium "
          : ""
      )}
      data-testid="chats-list-item"
    >
      <Link
        className="flex flex-col flex-1 min-w-0 p-2 hover:text-slate-900 hover:font-medium"
        href={`/chat/${chat.chat_id}`}
        key={chat.chat_id}
      >
        <div className="flex items-center gap-2">
          <MdChatBubbleOutline className="text-xl" />
          <ChatName
            setName={setChatName}
            editing={editingName}
            name={chatName}
          />
        </div>
      </Link>
      <div className="opacity-0 group-hover:opacity-100 flex items-center justify-center bg-gradient-to-l from-white dark:from-black to-transparent z-10 transition-opacity">
        {editable && (
          <button
            className="p-0 hover:text-blue-700 dark:text-white dark:hover:text-blue-700"
            type="button"
            onClick={handleEditNameClick}
          >
            {editingName ? <FiSave /> : <FiEdit />}
          </button>
        )}
        <button
          className="p-2 hover:text-red-700 dark:text-white dark:hover:text-red-700"
          type="button"
          onClick={onDelete ?? (() => void deleteChat())}
          data-testid="delete-chat-button"
        >
          <FiTrash2 />
        </button>
      </div>

      {/* Fade to white */}
      <div
        aria-hidden
        className="not-sr-only absolute left-1/2 top-0 bottom-0 right-0 bg-gradient-to-r from-transparent to-white dark:to-black pointer-events-none"
      ></div>
    </div>
  );
};
