"use client";

import ChatPage from "./[chatId]/page";

export const metadata = {
  title: "vaccinetruth.ai",
  openGraph: {
    title: "vaccinetruth",
    images: [
      {
        url: "/vaccine.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default ChatPage;
