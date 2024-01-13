import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaCircleUser } from "react-icons/fa6";

import { CopyButton } from "./components/CopyButton";
import { MessageContent } from "./components/MessageContent";
import { QuestionBrain } from "./components/QuestionBrain";
import { QuestionPrompt } from "./components/QuestionPrompt";
import { SourcesButton } from "./components/SourcesButton";
import { useMessageRow } from "./hooks/useMessageRow";

type MessageRowProps = {
  speaker: "user" | "assistant";
  text?: string;
  brainName?: string | null;
  promptName?: string | null;
  children?: React.ReactNode;
};

export const MessageRow = React.forwardRef(
  (
    { speaker, text, brainName, promptName, children }: MessageRowProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { t } = useTranslation(["vaccineTruth"]);
    const {
      containerClasses,
      containerWrapperClasses,
      handleCopy,
      isCopied,
      isUserSpeaker,
      markdownClasses,
    } = useMessageRow({
      speaker,
      text,
    });

    let messageContent = text ?? "";
    let sourcesContent = "";

    const sourcesIndex = messageContent.lastIndexOf("**Sources:**");
    const hasSources = sourcesIndex !== -1;

    if (hasSources) {
      sourcesContent = messageContent
        .substring(sourcesIndex + "**Sources:**".length)
        .trim();
      messageContent = messageContent.substring(0, sourcesIndex).trim();
    }

    return (
      <div className={containerWrapperClasses}>
        <div ref={ref} className={containerClasses}>
          <div className="flex items-center w-full">
            <div className="flex items-center">
              {!isUserSpeaker && (
                <div className="flex items-center">
                  <Image
                    className={"h-6 w-6 rounded-full mr-2"}
                    src={"/answer-bot.png"}
                    alt="answer-bot"
                    width={100}
                    height={100}
                  ></Image>
                  <span className="font-medium mr-4 dark:text-vt-50 text-vt-700">
                    {t("vaccineTruthAi")}
                  </span>
                </div>
              )}
              {/* Left section for the question and prompt */}
              <div className="hidden">
                <QuestionBrain brainName={brainName} />
                <QuestionPrompt promptName={promptName} />
              </div>
            </div>
            {/* Right section for buttons */}
            <div className="flex items-center gap-2">
              {!isUserSpeaker && (
                <>
                  {hasSources && <SourcesButton sources={sourcesContent} />}
                  <CopyButton handleCopy={handleCopy} isCopied={isCopied} />
                </>
              )}
            </div>

            {isUserSpeaker && (
              <div className="flex items-center">
                <FaCircleUser className="h-6 w-6 rounded-full mr-2 dark:text-vt-50" />
                <span className="font-medium dark:text-vt-50 text-vt-700">
                  {t("youSelf")}
                </span>
              </div>
            )}
          </div>
          {children ?? (
            <MessageContent
              text={messageContent}
              markdownClasses={markdownClasses}
            />
          )}
        </div>
      </div>
    );
  }
);

MessageRow.displayName = "MessageRow";
