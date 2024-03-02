"use client";
import { useEffect } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";
import { redirectToPreviousPageOrChatPage } from "@/lib/helpers/redirectToPreviousPageOrChatPage";

import { FooterSection, HomeHeader, Timeline, VTIntro } from "./components";

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
      <VTIntro />

      <Timeline />

      <div className="w-full">
        <FooterSection />
      </div>
    </>
  );
};

export default HomePage;
