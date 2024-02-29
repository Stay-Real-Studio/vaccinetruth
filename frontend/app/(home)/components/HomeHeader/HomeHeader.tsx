import Link from "next/link";
import { useTranslation } from "react-i18next";

import { LanguageSelect } from "@/app/chat/components/LanguageSelect";
import { QuivrLogo } from "@/lib/assets/QuivrLogo";
import { ThemeSelectVT } from "@/lib/components/ThemeSelectVT";
import { useSupabase } from "@/lib/context/SupabaseProvider";
import { cn } from "@/lib/utils";

import { PopoverMenuMobile } from "./components/PopoverMenuMobile";
import { useHomeHeader } from "./hooks/useHomeHeader";
import { linkStyle } from "./styles";

type HomeNavProps = {
  color?: "white" | "black";
};

export const HomeHeader = ({ color = "white" }: HomeNavProps): JSX.Element => {
  const { navLinks } = useHomeHeader({ color });
  const { t } = useTranslation(["vaccineTruth"]);
  const { session } = useSupabase();

  return (
    <div className="w-full ">
      <header className="flex justify-between items-center p-3 sm:p-5 min-w-max md:max-w-6xl mx-auto ">
        <Link
          href="/"
          className={cn(
            "text-base lg:text-xl flex gap-2 items-center",
            linkStyle[color]
          )}
        >
          <QuivrLogo size={64} color={color} />
          <div className="text-vt-700 hover:text-vt-800">
            {t("vaccineTruthAi")}
          </div>
        </Link>
        <div className="hidden sm:flex sm:items-center">
          <ThemeSelectVT isChatPage={false} />
          <LanguageSelect isSelect={true} isChatPage={false} />
          <ul className="flex gap-4 items-center">
            {navLinks("desktop", session !== null)}
          </ul>
        </div>
        <div className="md:hidden z-10">
          <PopoverMenuMobile
            navLinks={navLinks("mobile", session !== null)}
            color={color}
          />
        </div>
      </header>
    </div>
  );
};
