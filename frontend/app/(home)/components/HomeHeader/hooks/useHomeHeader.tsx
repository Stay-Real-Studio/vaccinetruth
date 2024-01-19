import Link from "next/link";
import { useTranslation } from "react-i18next";
import { AiFillStar } from "react-icons/ai";
import { LuChevronRight } from "react-icons/lu";

import { useHomepageTracking } from "@/app/(home)/hooks/useHomepageTracking";
import { useLogoutModal } from "@/app/user/components/LogoutCard/hooks/useLogoutModal";
import { cn } from "@/lib/utils";

import { linkStyle } from "../styles";
import { NavbarItem } from "../types";

type UseHomeHeaderProps = {
  color: "white" | "black";
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useHomeHeader = ({ color }: UseHomeHeaderProps) => {
  const { t } = useTranslation(["home", "vaccineTruth", "translation"]);
  const { onLinkClick } = useHomepageTracking();
  const { handleLogout } = useLogoutModal();

  const navItems: NavbarItem[] = [
    {
      href: "https://www.stayreal.studio/",
      label: t("buildByStayRealStudio", { ns: "vaccineTruth" }),
      rightIcon: null,
    },
    {
      href: "https://github.com/Stay-Real-Studio/vaccinetruth.ai",
      label: t("star_us"),
      leftIcon: <AiFillStar size={16} className="hidden md:inline" />,
      rightIcon: null,
    },
    {
      href: "/login",
      label: t("sign_up", { ns: "home" }),
      visibleWhenLogout: true,
    },
    {
      href: "/login",
      label: t("sign_in", { ns: "home" }),
      visibleWhenLogout: true,
    },
  ];

  const navLinks = (device: "mobile" | "desktop", isLogin: boolean) => {
    const filterNavItems = navItems.filter((item) =>
      isLogin ? item.visibleWhenLogout === undefined : true
    );

    return (
      <div
        className={`flex  ${device === "mobile" ? "flex-col" : "items-center"}`}
      >
        {filterNavItems.map(
          ({ href, label, leftIcon, rightIcon, newTab = false, className }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={(event) => {
                  onLinkClick({
                    href,
                    label,
                    event,
                  });
                }}
                {...(newTab && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className={cn(
                  "flex justify-between items-center hover:text-primary p-2 gap-1",
                  device === "desktop" ? linkStyle[color] : null,
                  className
                )}
              >
                {leftIcon}
                {label}
                {rightIcon !== null &&
                  (rightIcon ?? <LuChevronRight size={16} />)}
              </Link>
            </li>
          )
        )}
        {isLogin && (
          <span
            onClick={() => void handleLogout()}
            className={cn(
              "flex justify-between items-center hover:text-primary p-2 gap-1 cursor-pointer",
              device === "desktop" ? linkStyle[color] : null
            )}
          >
            {t("logoutButton", { ns: "translation" })}
          </span>
        )}
      </div>
    );
  };

  return {
    navLinks,
  };
};
