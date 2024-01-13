import Link from "next/link";
import { LuChevronRight, LuUser } from "react-icons/lu";

import { Button } from "@/app/chat/[chatId]/components/ActionsBar/components/ChatInput/components/ActionsModal/components/Button";

export const ProfileButton = (): JSX.Element => {
  return (
    <Link href="/user">
      <Button
        label="Profile"
        startIcon={
          <div className="p-3 bg-vt-200 text-vt-700 dark:hover:bg-vt-600 rounded-full dark:text-vt-900 dark:hover:text-vt-50">
            <LuUser size={25} />
          </div>
        }
        endIcon={<LuChevronRight size={18} />}
        className="w-full hover:bg-vt-200 dark:hover:bg-vt-600 text-vt-700 p-0 dark:text-vt-900 dark:hover:text-vt-50"
      />
    </Link>
  );
};
