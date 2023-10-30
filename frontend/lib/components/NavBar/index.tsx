"use client";

import { useFeatureIsOn } from "@growthbook/growthbook-react";
import { usePathname } from "next/navigation";

import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import { MobileMenu } from "./components/MobileMenu";
import { NavItems } from "./components/NavItems";

// eslint-disable-next-line complexity
export const NavBar = (): JSX.Element => {
  const path = usePathname();
  const pageHasSidebar =
    path === null ||
    path.startsWith("/chat") ||
    path.startsWith("/brains-management");

  const isNewHomePageActivated = useFeatureIsOn("new-homepage-activated");
  const isNewHomePage = path === "/" && isNewHomePageActivated;
  const isContactPage = path === "/contact";
  const isShareChatPage = path?.startsWith("/share/chat") ?? false;

  if (pageHasSidebar || isNewHomePage || isContactPage || isShareChatPage) {
    return <></>;
  }

  return (
    <Header>
      <Logo />
      <NavItems className="hidden sm:flex" />
      <MobileMenu />
    </Header>
  );
};
