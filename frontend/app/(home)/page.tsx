"use client";
import { useEffect } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";
// import { redirectToPreviousPageOrChatPage } from "@/lib/helpers/redirectToPreviousPageOrChatPage";

import {
  FooterSection,
  HomeHeader,
  IntroSection,
  Timeline,
} from "./components";

const HomePage = (): JSX.Element => {
  const { session } = useSupabase();

  useEffect(() => {
    if (session?.user !== undefined) {
      // redirectToPreviousPageOrChatPage();
    }
  }, [session?.user]);

  return (
    <>
      <HomeHeader />
      <main
        className=" flex items-center justify-center p-4"
        data-testid="home-page"
      >
        <div className="h-[84px]"></div>
        <IntroSection />
      </main>
      <Timeline />

      <div className="bg-gradient-to-b from-sky-700 to-sky-200   w-full">
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
