"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useShareChat = () => {
  const pathname = usePathname();
  const [isCopied, setIsCopied] = useState(false);
  const [isShareChatModalOpen, setIsShareChatModalOpen] = useState(false);
  // const [chatShareURL, setChatShareURL] = useState<string>("");

  const BASE_URL = `${location.origin}`;
  const shareURL = `${BASE_URL}/share${pathname ?? ""}`;

  const handleCopy = () => {
    if ((pathname ?? "") === "") {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions

    navigator.clipboard.writeText(shareURL).then(
      () => {
        setIsCopied(true);
        // setChatShareURL(shareURL);
      },
      (err) => console.error("Failed to copy!", err)
    );
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return {
    isCopied,
    handleCopy,
    isShareChatModalOpen,
    setIsShareChatModalOpen,
    chatShareURL: shareURL,
  };
};
