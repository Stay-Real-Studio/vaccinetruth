"use client";
// import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { useTranslation } from "react-i18next";

import Button from "@/lib/components/ui/Button";

import { OnboardingQuestions } from "./components";
import { ChatBar } from "./components/ChatBar/ChatBar";
import { useChatInput } from "./hooks/useChatInput";

export const VTChatInput = (): JSX.Element => {
  const { setMessage, submitQuestion, generatingAnswer, message } =
    useChatInput();
  const { t } = useTranslation(["chat"]);

  // const shouldDisplayOnboarding = useFeatureIsOn("onboarding");

  return (
    <>
      {/* {shouldDisplayOnboarding && <OnboardingQuestions />} */}
      <OnboardingQuestions />
      <div className="flex mt-1 flex-col w-full shadow-md dark:shadow-primary/25 hover:shadow-xl transition-shadow rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/25 p-2">
        <form
          data-testid="chat-input-form"
          onSubmit={(e) => {
            e.preventDefault();
            submitQuestion();
          }}
          className="sticky bottom-0 bg-white dark:bg-black w-full flex items-center gap-2 z-20 p-2"
        >
          <div className="flex flex-1 flex-col items-center">
            <ChatBar
              message={message}
              setMessage={setMessage}
              onSubmit={submitQuestion}
            />
          </div>

          <div className="flex flex-row items-end">
            <Button
              className="px-3 py-2 sm:px-4 sm:py-2"
              type="submit"
              isLoading={generatingAnswer}
              data-testid="submit-button"
            >
              {generatingAnswer
                ? t("thinking", { ns: "chat" })
                : t("chat", { ns: "chat" })}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
