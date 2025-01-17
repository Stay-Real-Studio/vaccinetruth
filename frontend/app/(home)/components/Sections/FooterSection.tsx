import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaGithub } from "react-icons/fa";
import { LuChevronRight } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";

import Button from "@/lib/components/ui/Button";
import {
  GITHUB_URL,
  TWITTER_URL,
  vaccinetruthaiGettrUrl,
} from "@/lib/config/CONSTANTS";

import { useHomepageTracking } from "../../hooks/useHomepageTracking";

export const FooterSection = (): JSX.Element => {
  // const { t } = useTranslation("home", { keyPrefix: "footer" });
  const { t } = useTranslation(["home", "vaccineTruth"]);
  const { onLinkClick } = useHomepageTracking();

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-1 text-vt-50 text-center text-lg ">
      <h2 className="text-sm sm:text-xl">
        {t("footer.title", { ns: "home" })}
      </h2>
      <p className="text-xs sm:text-base">
        {t("footer.description_1", { ns: "home" })} <br />
        {/* {t("footer.description_2", { ns: "home" })} */}
      </p>
      <div className="flex items-center justify-center gap-1 flex-wrap">
        <Link
          href="/login"
          className="hidden "
          onClick={(event) => {
            onLinkClick({
              href: "/login",
              label: "SIGN_IN",
              event,
            });
          }}
        >
          <Button className=" rounded-full ">
            {t("talkToAI", { ns: "vaccineTruth" })}
            <LuChevronRight size={24} />
          </Button>
        </Link>
        <Link
          href="/contact"
          className="hidden"
          onClick={(event) => {
            onLinkClick({
              href: "/contact",
              label: "CONTACT",
              event,
            });
          }}
        >
          <Button variant="tertiary">
            {t("intro.contact_sales", { ns: "home" })}{" "}
            <LuChevronRight size={24} />
          </Button>
        </Link>
      </div>
      <ul className="flex gap-4 mt-3 sm:mb-6 mb-2 text-vt-700">
        <li>
          <Link href={vaccinetruthaiGettrUrl} target="_blank">
            <Image
              src={"/gettr.svg"}
              height={24}
              width={24}
              alt={"gettr icon"}
              className="hover:text-vt-700 w-8 h-8 "
            ></Image>
          </Link>
        </li>
        <li>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quivr Twitter"
            className="homePageSubText w-8 h-8"
          >
            <RiTwitterXLine size={36} />
          </a>
        </li>
        <li>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quivr GitHub"
            className="homePageSubText w-8 h-8"
          >
            <FaGithub size={36} />
          </a>
        </li>
      </ul>
    </div>
  );
};
