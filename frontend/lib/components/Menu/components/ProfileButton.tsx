import Link from "next/link";
import { LuChevronRight, LuUser } from "react-icons/lu";

import { Button } from "@/app/chat/[chatId]/components/ActionsBar/components/ChatInput/components/ActionsModal/components/Button";

export const ProfileButton = (): JSX.Element => {
  return (
    <Link href="/user" className="">
      <Button
        label="Profile"
        startIcon={
          <div className="p-2 bg-vt-200 text-vt-400 hover:text-vt-50  rounded-full ">
            <LuUser size={25} className="" />
          </div>
        }
        endIcon={<LuChevronRight size={18} />}
        className="w-60 py-1 ml-1 hover:bg-vt-700  hover:text-vt-50 text-vt-400  dark:text-vt-400"
      />
    </Link>
  );
};
