import Link from "next/link";
import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go";

import { LanguageSelect } from "@/app/chat/components/LanguageSelect";
import { Logo } from "@/lib/components/Logo/Logo";
import { ThemeSelectVT } from "@/lib/components/ThemeSelectVT";
export const MenuHeader = (): JSX.Element => {
  const { t } = useTranslation(["vaccineTruth"]);

  return (
    <div className="p-2 relative">
      <div className="max-w-screen-xl flex justify-between items-center pt-3 pl-3">
        <Logo />
        <LanguageSelect isSelect={false} isChatPage={true} />
        <ThemeSelectVT isChatPage={true} />
      </div>
      <Link
        href="/chat"
        className="hover:bg-slate-100 mt-2 border p-2 flex justify-center items-center gap-1 cursor-pointer rounded-lg w-full dark:text-slate-700 dark:hover:text-slate-900"
      >
        <GoPlus />
        {t("newChatButton")}
      </Link>
    </div>
  );
};
