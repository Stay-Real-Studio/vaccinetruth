/* eslint-disable max-lines */

import { useChatContext } from "@/lib/context";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useChat = () => {
  const { messages } = useChatContext();

  return {
    messages,
  };
};
