"use client";
/* eslint-disable max-lines */
import { useTranslation } from "react-i18next";
import { FiCheckCircle, FiCopy, FiShare } from "react-icons/fi";

import Button from "@/lib/components/ui/Button";
import { Modal } from "@/lib/components/ui/Modal";

// eslint-disable-next-line import/order
import { ShareButtons } from "./ShareButtons";
import { useSharedChat } from "./hooks/useSharedChat";

export const ShareModal = (): JSX.Element => {
  const {
    isCopied,
    handleCopy,
    isShareChatModalOpen,
    setIsShareChatModalOpen,
    isGeneratingShareId,
    chatShareURL,
  } = useSharedChat();
  const { t } = useTranslation(["vaccineTruth"]);

  return (
    <Modal
      Trigger={
        <Button className="px-4 py-2 sm:px-4 sm:py-2 bg-vt-700 border-0">
          <FiShare />
        </Button>
      }
      title={t("chatShareTitle")}
      desc={t("chatShareDesc")}
      isOpen={isShareChatModalOpen}
      setOpen={setIsShareChatModalOpen}
      CloseTrigger={<div />}
    >
      {!isGeneratingShareId && (
        <div>
          <div className="my-6 flex ">
            <span className="mr-4 text-xs sm:text-sm">
              {t("chatShareCopyURL")}
            </span>
            <button
              onClick={handleCopy}
              title={`${isCopied ? "Copied" : "Copy Chat URL to clipboard"}`}
            >
              {isCopied ? <FiCheckCircle /> : <FiCopy />}
            </button>
          </div>
          <div>
            <div>
              <div className="mb-2 text-xs sm:text-sm">{t("chatShareTo")}</div>
              <ShareButtons chatShareURL={chatShareURL} />
            </div>
          </div>
        </div>
      )}
      {isGeneratingShareId && (
        <div>
          <div className="flex animate-pulse space-x-4">
            <div className="w-full space-y-6 py-1">
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-2 rounded bg-vt-200"></div>
                <div className="col-span-2 h-2 rounded bg-vt-200"></div>
                <div className="col-span-1 h-2 rounded bg-vt-200"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-2 rounded bg-vt-200"></div>
                <div className="col-span-2 h-2 rounded bg-vt-200"></div>
                <div className="col-span-1 h-2 rounded bg-vt-200"></div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 h-2 rounded bg-vt-200"></div>
                <div className="col-span-2 h-2 rounded bg-vt-200"></div>
                <div className="col-span-1 h-2 rounded bg-vt-200"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
