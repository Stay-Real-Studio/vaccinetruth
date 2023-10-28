"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useShareChat = () => {
  const pathname = usePathname();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if ((pathname ?? "") === "") {
      return;
    }
    const BASE_URL = `${location.origin}`;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const shareURL = `${BASE_URL}/share${pathname}`;
    navigator.clipboard.writeText(shareURL).then(
      () => setIsCopied(true),
      (err) => console.error("Failed to copy!", err)
    );
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  return {
    isCopied,
    handleCopy,
  };
};
