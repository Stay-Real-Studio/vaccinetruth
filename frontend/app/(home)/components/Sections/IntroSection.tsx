import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { LuChevronRight } from "react-icons/lu";

import Button from "@/lib/components/ui/Button";

import { useHomepageTracking } from "../../hooks/useHomepageTracking";

export const IntroSection = (): JSX.Element => {
  const { t } = useTranslation(["home", "vaccineTruth"]);
  const laptopImage = "/Homepage/laptop-demo.png";
  const smartphoneImage = "/Homepage/smartphone-demo.png";
  const { onLinkClick } = useHomepageTracking();

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex-1 flex flex-col justify-center gap-10 ">
          <div>
            <h1 className="sm:text-lg  md:text-2xl lg:text-4xl font-bold text-vt-700 block max-w-2xl dark:text-vt-50">
              {t("intro.title", { ns: "home" })}
              {/* <span className="text-cyan-900 ml-4">
                {t("vaccineTruthAi", { ns: "vaccineTruth" })}
              </span> */}
            </h1>
            <br />
          </div>
          <div className="flex flex-col items-start sm:flex-row sm:items-center gap-5">
            <Link
              href="/login"
              onClick={(event) =>
                onLinkClick({
                  href: "/login",
                  label: "SIGN_IN",
                  event,
                })
              }
            >
              <Button className="text-vt-50 bg-vt-700 rounded-full px-2 py-2 sm:px-4 ">
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
                  label: "CONTACT_SALES",
                  event,
                });
              }}
            >
              <Button variant="tertiary" className="font-semibold">
                {t("intro.contact_sales", { ns: "home" })}
                <LuChevronRight size={24} />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded flex items-center justify-center">
          <Image
            src={laptopImage}
            alt="Quivr on laptop"
            width={1600}
            height={1600}
            quality={100}
            className="hidden sm:block max-w-[calc(40vh-100px)] max-h-[calc(40vh-100px)] xl:scale-125 sm:scale-105 sm:max-w-[calc(60vh)] sm:max-h-[calc(60vh)]"
          />
          <Image
            src={smartphoneImage}
            alt="Quivr on smartphone"
            width={640}
            height={640}
            className="sm:hidden"
          />
        </div>
      </div>
    </>
  );
};
