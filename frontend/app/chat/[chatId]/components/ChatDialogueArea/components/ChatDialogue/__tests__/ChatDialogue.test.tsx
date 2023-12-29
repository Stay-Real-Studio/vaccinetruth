import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ChatMessage } from "@/app/chat/[chatId]/types";
import {
  ChatContextMock,
  ChatProviderMock,
} from "@/lib/context/ChatProvider/mocks/ChatProviderMock";

import { ChatDialogue } from "..";
import { ChatDialogueArea } from "../../../ChatDialogue";
import { getMergedChatMessagesWithDoneStatusNotificationsReduced } from "../../../utils/getMergedChatMessagesWithDoneStatusNotificationsReduced";

vi.mock("@/lib/context/ChatProvider/ChatProvider", () => ({
  ChatContext: ChatContextMock,
  ChatProvider: ChatProviderMock,
}));

vi.mock("@/lib/context/SupabaseProvider", () => ({
  useSupabase: () => ({
    session: {
      user: {},
    },
  }),
}));

vi.mock("../hooks/useChatDialogue", () => ({
  useChatDialogue: vi.fn(() => ({
    chatListRef: vi.fn(),
  })),
}));
const queryClient = new QueryClient();

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(actual as any),
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      // get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});

describe("ChatDialogue", () => {
  it("should render chat messages correctly", () => {
    const messages: ChatMessage[] = [
      {
        assistant: "Test assistant message",
        message_id: "123",
        user_message: "Test user message",
        prompt_title: "Test prompt name",
        brain_name: "Test brain name",
        chat_id: "",
        message_time: "",
      },
    ];
    const chatItems = getMergedChatMessagesWithDoneStatusNotificationsReduced(
      messages,
      []
    );
    const { getAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ChatDialogue chatItems={chatItems} />
      </QueryClientProvider>
    );
    expect(getAllByTestId("brain-tags")).toBeDefined();
    expect(getAllByTestId("prompt-tags")).toBeDefined();
    expect(getAllByTestId("chat-message-text")).toBeDefined();
  });

  it("should render ChatGuide when history is empty", () => {
    const { getAllByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <ChatProviderMock>
          <ChatDialogueArea />
        </ChatProviderMock>
      </QueryClientProvider>
    );

    expect(getAllByTestId("chat-guide-page")).toBeDefined();
  });
});
