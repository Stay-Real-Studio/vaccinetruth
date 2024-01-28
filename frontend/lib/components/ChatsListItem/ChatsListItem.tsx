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
        "rounded-lg w-60  relative group hover:text-vt-200  hover:font-medium flex overflow-x-hidden  hover:bg-vt-700 ",
        selected ? "bg-vt-700  text-vt-100  font-medium " : ""
      )}
      data-testid="chats-list-item"
    >
      <Link
        className={`flex flex-col flex-1 min-w-0 py-2 px-2 hover:text-vt-200 hover:font-medium ${
          selected ? "text-vt-50" : "text-vt-400"
        }`}
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
        className={`absolute z-10  right-0 ${
          editingName ? "-top-1" : "-top-1"
        }`}
      >
        <div className=" opacity-0 group-hover:opacity-100 flex items-center justify-center bg-gradient-to-r from-vt-700  to-vt-700 z-10 transition-opacity">
          {editable && (
            <button
              className="p-0 hover:text-blue-700 "
              type="button"
              onClick={handleEditNameClick}
            >
              {editingName ? <FiSave /> : <FiEdit />}
            </button>
          )}
          <button
            className="p-2 hover:text-red-700 "
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
        className="hidden not-sr-only absolute left-1/2 top-0 bottom-0 right-0 bg-gradient-to-r from-transparent to-vt-50  pointer-events-none"
      ></div>
    </div>
  );
};
