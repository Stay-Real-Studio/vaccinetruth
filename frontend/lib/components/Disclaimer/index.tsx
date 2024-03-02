"use client";
// eslint-disable-next-line import/no-extraneous-dependencies
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Trans, useTranslation } from "react-i18next";

import { HelpSelect } from "@/app/chat/components/HelpSelect";
import { useDiclaimer } from "@/lib/hooks/useDiclaimer";

export const Disclaimer = ({
  defaultVisibleDisclaimer,
}: {
  defaultVisibleDisclaimer: boolean;
}): JSX.Element => {
  const { t } = useTranslation(["vaccineTruth"]);

  const { handleCloseDisclaimer, visibleDisclaimer, handleVisibleDisclaimer } =
    useDiclaimer(defaultVisibleDisclaimer);

  return (
    <>
      <div>
        <div
          className={`${
            visibleDisclaimer ? "block" : "hidden"
          } sm:mt-0 mt-10 rounded-3xl mb-4 relative isolate flex items-center gap-x-6 overflow-hidden dark:bg-vt-600 bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1`}
        >
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r dark:from-slate-300 dark:to-slate-500 from-[#ab7d90] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r  dark:from-slate-300 dark:to-slate-500 from-[#ab7d90] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            />
          </div>
          <p className="text-sm leading-6 text-gray-900 dark:text-vt-200">
            <span>
              <strong className="font-semibold">{t("disclaimer")}</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>

              <Trans
                components={[
                  <a
                    key="miles guo"
                    target="_blank"
                    className="text-sky-600 hover:text-sky-800"
                    href={"https://gettr.com/user/milesguo"}
                  />,
                  <a
                    key="nfsc"
                    target="_blank"
                    className="text-sky-600 hover:text-sky-800"
                    href={"https://gettr.com/user/NFSCSpeaks"}
                  />,
                ]}
                i18nKey="disclaimerContent"
                ns="vaccineTruth"
              ></Trans>
              {/* <span aria-hidden="true">&rarr;</span> */}
            </span>
          </p>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon
                onClick={() => handleCloseDisclaimer()}
                className="h-5 w-5 text-gray-900"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <HelpSelect
          className="fixed sm:bottom-8 bottom-16 lg:right-4 md:right-2 sm:right-1 z-50 right-1 "
          handleVisibleDisclaimer={handleVisibleDisclaimer}
        />
      </div>
    </>
  );
};
