import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { LuPanelLeftOpen } from "react-icons/lu";

import { ChatHistory } from "@/lib/components/ChatHistory/ChatHistoryVT";
import { nonProtectedPaths } from "@/lib/config/routesConfig";
import { useSideBarContext } from "@/lib/context/SidebarProvider/hooks/useSideBarContext";

// eslint-disable-next-line import/order
import Button from "../ui/Button";
import { AnimatedDiv } from "./components/AnimationDiv";
import { BrainsManagementButton } from "./components/BrainsManagementButton";
import { DiscussionButton } from "./components/DiscussionButton";
import { ExplorerButton } from "./components/ExplorerButton";
import { MenuHeader } from "./components/MenuHeader";
import { ParametersButton } from "./components/ParametersButton";
import { ProfileButton } from "./components/ProfileButton";
import { UpgradeToPlus } from "./components/UpgradeToPlus";
import { useMenuWidth } from "./hooks/useMenuWidth";

export const Menu = (): JSX.Element => {
  const pathname = usePathname() ?? "";

  const { setIsOpened } = useSideBarContext();

  const { shouldSideBarBeSticky, OPENED_MENU_WIDTH } = useMenuWidth();

  if (nonProtectedPaths.includes(pathname)) {
    return <></>;
  }

  const displayedOnPages = ["/chat", "/library", "/brains-management"];

  const isMenuDisplayed = displayedOnPages.some((page) =>
    pathname.includes(page)
  );

  if (!isMenuDisplayed || pathname.startsWith("/shared/chat")) {
    return <></>;
  }

  return (
    <MotionConfig transition={{ mass: 1, damping: 10, duration: 0.2 }}>
      <div
        className="flex flex-col fixed sm:sticky top-0 left-0 h-full overflow-visible z-[1000]   bg-highlight dark:bg-vt-700"
        style={{
          width: shouldSideBarBeSticky ? OPENED_MENU_WIDTH : 0,
        }}
      >
        <AnimatedDiv>
          <div className="flex flex-col flex-1 h-full dark:bg-vt-800 bg-highlight pb-2">
            <MenuHeader />
            <div
              className="flex flex-col flex-1 overflow-hidden"
              data-testid="chats-list"
            >
              <ChatHistory />
            </div>

            <div className="hidden w-full">
              <div className="w-full gap-2 flex flex-col">
                <DiscussionButton />
                <ExplorerButton />
                <BrainsManagementButton />
                <ParametersButton />
              </div>
            </div>
            <div>
              <UpgradeToPlus />
              <ProfileButton />
            </div>
          </div>
        </AnimatedDiv>
      </div>
      <Button
        variant="tertiary"
        onClick={() => setIsOpened((prev) => !prev)}
        className="absolute top-1 left-2 sm:hidden z-50 "
      >
        <LuPanelLeftOpen className="" size={30} />
      </Button>
    </MotionConfig>
  );
};
