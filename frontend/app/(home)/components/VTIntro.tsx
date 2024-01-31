/* eslint-disable max-lines */
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { useTranslation } from "react-i18next";
import { LuChevronRight } from "react-icons/lu";

import Button from "@/lib/components/ui/Button";

// eslint-disable-next-line import/order
import { useHomepageTracking } from "../hooks/useHomepageTracking";

// eslint-disable-next-line import/order
import { Container } from "./Container";

const BackgroundIllustration = (
  props: React.ComponentPropsWithoutRef<"div">
) => {
  const id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const VTIntro = (): JSX.Element => {
  const { t } = useTranslation(["home", "vaccineTruth"]);
  const { onLinkClick } = useHomepageTracking();

  const laptopImage = "/Homepage/laptop-demo.png";
  const smartphoneImage = "/Homepage/smartphone-demo.png";

  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-1 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              {t("intro.title", { ns: "home" })}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              {t("vtSubIntro", { ns: "vaccineTruth" })}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
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
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <div className="flex-1 rounded flex items-center justify-center margin-auto">
                <Image
                  src={laptopImage}
                  alt="Quivr on laptop"
                  width={600}
                  height={600}
                  quality={100}
                  className="hidden sm:block"
                />
                <Image
                  src={smartphoneImage}
                  alt="Quivr on smartphone"
                  width={600}
                  height={600}
                  quality={100}
                  className="sm:hidden scale-150 mt-16"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
