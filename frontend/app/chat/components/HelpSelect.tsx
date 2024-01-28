"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiShare1 } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

import { getHelpOptions } from "@/lib/api/chat/utils";
import { HelpOption } from "@/lib/types/VaccineTruth";
import { cn } from "@/lib/utils";
import { useSecurity } from "@/services/useSecurity/useSecurity";

export const HelpSelect = ({
  className,
  handleVisibleDisclaimer,
}: {
  handleVisibleDisclaimer: () => void;
  className?: string;
}): JSX.Element => {
  const { isStudioMember } = useSecurity();
  const [currentOption, setCurrentOption] = useState<string>("");
  const router = useRouter();
  const { t } = useTranslation(["vaccineTruth"]);

  const HelpOptions = [
    {
      label: t("disclaimer"),
      needAuth: false,
    },
    {
      label: t("feedbackIntro"),
      needAuth: false,
    },
    {
      label: "BrainsManagement",
      needAuth: true,
    },
  ];

  return (
    <div className={cn(className, "")}>
      <Listbox
        value={currentOption}
        onChange={(e) => {
          setCurrentOption(e);
          if (e === t("disclaimer")) {
            handleVisibleDisclaimer();
          } else if (e === "BrainsManagement") {
            router.push("/brains-management");
          } else if (e === t("feedbackIntro")) {
            router.push("/feedback");
          }
        }}
      >
        {({ open }) => (
          <>
            <div className="relative">
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute bottom-8 right-4 z-10 mt-1 max-h-60 w-36 overflow-auto rounded-md bg-vt-50 py-1 text-base shadow-lg ring-1 ring-vt-700 ring-opacity-5 focus:outline-none sm:text-sm">
                  {getHelpOptions(isStudioMember, HelpOptions).map(
                    (option: HelpOption) => (
                      <Listbox.Option
                        key={option.label}
                        className={({ active }) =>
                          cn(
                            active
                              ? "bg-indigo-600 text-vt-50"
                              : "text-gray-900",
                            "relative cursor-pointer select-none py-2 pl-3 pr-9 text-xs sm:text-sm"
                          )
                        }
                        value={option.label}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {option.label}
                            </span>

                            <span
                              className={cn(
                                active ? "text-vt-50" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-2"
                              )}
                            >
                              <CiShare1 />
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    )
                  )}
                </Listbox.Options>
              </Transition>

              <Listbox.Button className="text-base   w-full cursor-pointer rounded-full  text-gray-900 shadow-sm  sm:text-2lg">
                <IoIosHelpCircleOutline className="h-6 w-6" />
              </Listbox.Button>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};
