import { UUID } from "crypto";

export type ChatQuestion = {
  model?: string;
  question?: string;
  temperature?: number;
  max_tokens?: number;
  brain_id?: string;
  prompt_id?: string;
};
export type ChatMessage = {
  chat_id: string;
  message_id: string;
  user_message: string;
  assistant: string;
  message_time: string;
  prompt_title?: string;
  brain_name?: string;
};

type NotificationStatus = "Pending" | "Done";

export type Notification = {
  id: string;
  datetime: string;
  chat_id?: string | null;
  message?: string | null;
  action: string;
  status: NotificationStatus;
};

export type ChatMessageItem = {
  item_type: "MESSAGE";
  body: ChatMessage;
};

export type NotificationItem = {
  item_type: "NOTIFICATION";
  body: Notification;
};

export type ChatItem = ChatMessageItem | NotificationItem;

export type ChatEntity = {
  chat_id: UUID;
  user_id: string;
  creation_time: string;
  chat_name: string;
};

export type SharedChat = {
  id: string;
  chat_id: string;
};
