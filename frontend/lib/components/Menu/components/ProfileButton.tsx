import Link from "next/link";
import { LuChevronRight, LuUser } from "react-icons/lu";

import { Button } from "@/app/chat/[chatId]/components/ActionsBar/components/ChatInput/components/ActionsModal/components/Button";

export const ProfileButton = (): JSX.Element => {
  return (
    <Link href="/user">
      <Button
        label="Profile"
        startIcon={
          <div className="p-3 bg-gray-200 text-black dark:hover:bg-gray-600 rounded-full dark:text-slate-900 dark:hover:text-white">
            <LuUser size={25} />
          </div>
        }
        endIcon={<LuChevronRight size={18} />}
        className="w-full hover:bg-gray-200 dark:hover:bg-gray-600 text-black p-0 dark:text-slate-900 dark:hover:text-white"
      />
    </Link>
  );
};
