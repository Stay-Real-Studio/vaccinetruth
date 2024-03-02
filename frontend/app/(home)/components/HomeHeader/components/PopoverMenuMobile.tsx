import * as Popover from "@radix-ui/react-popover";
import { useTranslation } from "react-i18next";
import { LuMenu, LuX } from "react-icons/lu";

import { LanguageSelect } from "@/app/chat/components/LanguageSelect";
import { QuivrLogo } from "@/lib/assets/QuivrLogo";
import { cn } from "@/lib/utils";

type PopoverMenuMobileProps = {
  navLinks: JSX.Element;
  color?: "white" | "black";
};

export const PopoverMenuMobile = ({
  navLinks,
  color = "white",
}: PopoverMenuMobileProps): JSX.Element => {
  const { t } = useTranslation(["vaccineTruth"]);

  return (
    <>
      <Popover.Root>
        <div>
          <Popover.Anchor />
          <Popover.Trigger
            title="menu"
            type="button"
            className={cn(
              "bg-[#D9D9D9] bg-opacity-30 rounded-full px-2 py-1",
              color === "white" ? "text-vt-700" : "text-black"
            )}
          >
            <LuMenu size={32} />
          </Popover.Trigger>
        </div>
        <Popover.Content
          style={{
            minWidth: "max-content",
            backgroundColor: "white",
            borderRadius: "0.75rem",
            paddingTop: "0.5rem",
            paddingInline: "1rem",
            paddingBottom: "1.5rem",
            marginRight: "1rem",
            marginTop: "-1rem",
            boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-col gap-4 min-w-max w-[calc(100vw-4rem)] sm:w-[300px]">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <QuivrLogo size={64} color="primary" />
                <div className="text-lg font-medium text-vt-700 cursor-default ">
                  {t("vaccineTruthAi")}
                </div>
              </div>
              <Popover.Close>
                <span
                  title="close"
                  className="hover:text-primary p-2 dark:text-black"
                >
                  <LuX size={24} />
                </span>
              </Popover.Close>
            </div>
            <nav>
              <ul className="flex flex-col bg-[#F5F8FF] rounded-xl p-2 dark:bg-black">
                <li>{/* <ThemeSelectVT isChatPage={false} /> */}</li>
                <li>
                  <LanguageSelect isSelect={true} />
                </li>
                {navLinks}
              </ul>
            </nav>
          </div>
        </Popover.Content>
      </Popover.Root>
    </>
  );
};
