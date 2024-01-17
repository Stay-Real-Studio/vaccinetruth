import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go";

import { LanguageSelect } from "@/app/chat/components/LanguageSelect";
// import { Logo } from "@/lib/components/Logo/Logo";
import { ThemeSelectVT } from "@/lib/components/ThemeSelectVT";
export const MenuHeader = (): JSX.Element => {
  const { t } = useTranslation(["vaccineTruth"]);

  return (
    <div className="p-2 relative">
      <Link
        href="/chat"
        className="hover:bg-vt-700 px-2 py-1 text-vt-50 hover:text-vt-100 flex justify-between items-center  cursor-pointer rounded-lg w-full dark:text-vt-700 dark:hover:text-vt-900"
      >
        <span className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={"/vt-logo.png"}
            alt="Vaccinetruth Logo"
            width={32}
            height={32}
          />
          {t("newChatButton")}
        </span>

        <GoPlus />
      </Link>
      <div className="max-w-screen-xl flex gap-3 items-center pl-2">
        <LanguageSelect isSelect={true} isChatPage={true} />
        <ThemeSelectVT isChatPage={true} />
      </div>
    </div>
  );
};
