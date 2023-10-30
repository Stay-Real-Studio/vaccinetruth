/* eslint-disable max-lines */
import { useTranslation } from "react-i18next";
import { FiCheckCircle, FiCopy, FiShare } from "react-icons/fi";

import Button from "@/lib/components/ui/Button";
import { Modal } from "@/lib/components/ui/Modal";

import { useShareChat } from "../ChatDialogueArea/components/ChatDialogue/hooks/useShareChat";
// eslint-disable-next-line import/order
import { SharePlatform } from "./SharePlatform";

export const ShareModal = (): JSX.Element => {
  const {
    isCopied,
    handleCopy,
    isShareChatModalOpen,
    setIsShareChatModalOpen,
  } = useShareChat();
  const { t } = useTranslation(["vaccineTruth"]);

  return (
    <Modal
      Trigger={
        <Button>
          <FiShare />
        </Button>
      }
      title={t("chatShareTitle")}
      desc={t("chatShareDesc")}
      isOpen={isShareChatModalOpen}
      setOpen={setIsShareChatModalOpen}
      CloseTrigger={<div />}
    >
      <div className="my-6 flex ">
        <span className="mr-4">{t("chatShareCopyURL")}</span>
        <button
          onClick={handleCopy}
          title={`${isCopied ? "Copied" : "Copy Chat URL to clipboard"}`}
        >
          {isCopied ? <FiCheckCircle /> : <FiCopy />}
        </button>
      </div>
      <div>
        <div>
          <div className="mb-2">{t("chatShareTo")}</div>
          <SharePlatform />
        </div>
      </div>
    </Modal>
  );
};
