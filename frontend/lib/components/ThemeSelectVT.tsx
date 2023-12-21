"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { BsSun } from "react-icons/bs";
import { CiDark } from "react-icons/ci";

import { useTheme } from "@/app/user/components/ThemeSelect/hooks/useTheme";

export const ThemeSelectVT = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={`mx-2`}>
      <div>
        <button
          onClick={() => handleToggleTheme()}
          className={`dark:text-white sm:text-white dark:sm:text-white hover:text-slate-200  text-black cursor-pointer  text-xs  bg-transparent py-1.5  sm:px-3 text-left   sm:text-sm sm:leading-6`}
        >
          {theme === "dark" ? <CiDark /> : <BsSun />}
        </button>
      </div>
    </div>
  );
};
