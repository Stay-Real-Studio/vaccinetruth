"use client";
import { useTranslation } from "react-i18next";

import { QuestionList } from "@/app/chat/components/QuestionList";
import Button from "@/lib/components/ui/Button";

import { ChatEditor } from "./components/ChatEditor/ChatEditor";
import { MenuControlButton } from "./components/MenuControlButton";
import { useChatInput } from "./hooks/useChatInput";

export const ChatInput = (): JSX.Element => {
  const { setMessage, submitQuestion, generatingAnswer, message } =
    useChatInput();

  const { t } = useTranslation(["chat"]);

  return (
    <>
      <QuestionList />
      <div className="flex mt-1 flex-col w-full shadow-md dark:shadow-primary/25 hover:shadow-xl transition-shadow rounded-xl bg-vt-50 dark:bg-vt-700 border border-vt-700/10 dark:border-vt-50/25 p-2">
        <form
          data-testid="chat-input-form"
          onSubmit={(e) => {
            e.preventDefault();
            submitQuestion();
          }}
          className="sticky bottom-0 bg-vt-50 dark:bg-vt-700 w-full flex items-center gap-2 z-20 p-2"
        >
          <MenuControlButton />

          <div className="flex flex-1">
            <ChatEditor
              message={message}
              setMessage={setMessage}
              onSubmit={submitQuestion}
            />
          </div>

          <div className="flex flex-row items-center gap-4">
            <Button
              className="px-3 py-2 sm:px-4 sm:py-2 bg-vt-700 border-0"
              type="submit"
              isLoading={generatingAnswer}
              data-testid="submit-button"
            >
              {generatingAnswer
                ? t("thinking", { ns: "chat" })
                : t("chat", { ns: "chat" })}
            </Button>
            {/* <ActionsModal /> */}
          </div>
        </form>
      </div>
    </>
  );
};
