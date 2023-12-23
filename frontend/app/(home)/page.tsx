"use client";
import { useEffect } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";
import { redirectToPreviousPageOrChatPage } from "@/lib/helpers/redirectToPreviousPageOrChatPage";

import { FooterSection, HomeHeader, IntroSection } from "./components";

const HomePage = (): JSX.Element => {
  const { session } = useSupabase();

  useEffect(() => {
    if (session?.user !== undefined) {
      redirectToPreviousPageOrChatPage();
    }
  }, [session?.user]);

  return (
    <>
      <HomeHeader />
      <main
        className="h-full flex items-center justify-center p-4"
        data-testid="home-page"
      >
        <IntroSection />
      </main>

      <div className="bg-gradient-to-b from-sky-700 to-sky-200 fixed left-0 bottom-0 w-full">
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
