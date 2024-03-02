import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Outfit } from "next/font/google";
import { cookies, headers } from "next/headers";

import { ToastProvider } from "@/lib/components/ui/Toast";
import {
  ChatProvider,
  FeatureFlagsProvider,
  KnowledgeToFeedProvider,
} from "@/lib/context";
import { ChatsProvider } from "@/lib/context/ChatsProvider/chats-provider";
import { SupabaseProvider } from "@/lib/context/SupabaseProvider";

import { App } from "./App";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "vaccinetruth.ai",
  description: "Your AI source of the Covid-19 vaccine truth",
};

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body
        className={`bg-vt-50 text-vt-700 h-screen flex flex-col dark:bg-vt-700 dark:text-vt-50 w-full ${inter.className}`}
      >
        <FeatureFlagsProvider>
          <ToastProvider>
            <SupabaseProvider session={session}>
              <KnowledgeToFeedProvider>
                <ChatsProvider>
                  <ChatProvider>
                    <App>{children}</App>
                  </ChatProvider>
                </ChatsProvider>
              </KnowledgeToFeedProvider>
            </SupabaseProvider>
          </ToastProvider>
          <VercelAnalytics />
        </FeatureFlagsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
