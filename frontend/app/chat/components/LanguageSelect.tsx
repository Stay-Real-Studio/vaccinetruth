/* eslint-disable max-lines */
"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { FiChevronDown } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";

import { useLanguageHook } from "@/app/user/components/LanguageSelect/hooks/useLanguageHook";
import { cn } from "@/lib/utils";

export const LanguageSelect = ({
  isSelect,
  isChatPage,
}: {
  isSelect: boolean;
  isChatPage?: boolean;
}): JSX.Element => {
  const { allLanguages, currentLanguage, change, handleToggleLanguage } =
    useLanguageHook();

  return (
    <div className={`${!isSelect ? "mr-2 ml-2" : "py-2"}`}>
      {isSelect && (
        <Listbox
          value={currentLanguage}
          onChange={(e) => {
            change(e);
          }}
        >
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button className="text-xs flex gap-1 items-center cursor-pointer  py-1.5 pl-3 pr-8 text-left text-gray-900  sm:text-sm sm:leading-6">
                  <span
                    className={`${
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      isChatPage
                        ? "sm:text-vt-700 hover:text-vt-900 dark:sm:text-vt-700 dark:hover:text-vt-900"
                        : "sm:text-vt-50 hover:text-vt-200 dark:text-vt-50"
                    } text-vt-700  text-xs  py-1.5  text-left   sm:text-sm sm:leading-6`}
                  >
                    <IoLanguage></IoLanguage>
                  </span>
                  <span
                    className={`pointer-events-none  inset-y-0  flex items-center pr-2 ${
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      isChatPage
                        ? "sm:text-vt-700 hover:text-primary dark:sm:text-vt-700 dark:hover:text-vt-900"
                        : "sm:text-vt-50 hover:text-vt-200 dark:text-vt-50"
                    } text-vt-700  text-xs  py-1.5  text-left   sm:text-sm sm:leading-6`}
                  >
                    <FiChevronDown className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-36 overflow-auto rounded-md bg-vt-50 py-1 text-base shadow-lg ring-1 ring-vt-700 ring-opacity-5 focus:outline-none sm:text-sm">
                    {Object.keys(allLanguages).map((lang) => (
                      <Listbox.Option
                        key={lang}
                        className={({ active }) =>
                          cn(
                            active
                              ? "bg-indigo-600 text-vt-50"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9 text-xs sm:text-sm"
                          )
                        }
                        value={lang}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={cn(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {allLanguages[lang].label}
                            </span>

                            {selected ? (
                              <span
                                className={cn(
                                  active ? "text-vt-50" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-2"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      )}
      {!isSelect && (
        <div>
          <button
            onClick={() => handleToggleLanguage()}
            className={`${
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              isChatPage
                ? "sm:text-vt-700 hover:text-primary dark:sm:text-vt-700 dark:hover:text-vt-900"
                : "sm:text-vt-50 hover:text-vt-200 dark:text-vt-50"
            } text-vt-700   cursor-pointer  text-xs  bg-transparent py-1.5  sm:px-2 text-left   sm:text-sm sm:leading-6`}
          >
            <IoLanguage className="" />
          </button>
        </div>
      )}
    </div>
  );
};
