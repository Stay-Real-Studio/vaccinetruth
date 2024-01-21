import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { GoPlus } from "react-icons/go";

import { LanguageSelect } from "@/app/chat/components/LanguageSelect";
// import { Logo } from "@/lib/components/Logo/Logo";
export const MenuHeader = (): JSX.Element => {
  const { t } = useTranslation(["vaccineTruth"]);

  return (
    <div className="p-2 relative">
      <Link
        href="/chat"
        className="hover:bg-vt-700 px-2 py-1 text-vt-400 hover:text-vt-200 flex justify-between items-center  cursor-pointer rounded-lg w-full "
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
        {/* <ThemeSelectVT isChatPage={true} /> */}
      </div>
    </div>
  );
};
