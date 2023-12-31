/* eslint-disable max-lines */
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

import { NotificationsVT } from "@/lib/components/NotificationsVT";
import Button from "@/lib/components/ui/Button";

import { useFeedback } from "../hooks/useFeedback";

const FeedbackPage = (): JSX.Element => {
  const { t } = useTranslation(["vaccineTruth"]);

  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");

  const router = useRouter();

  const {
    handleSave,
    addFeedbackStatus,
    visibleNotification,
    resetStatus,
    isloading,
  } = useFeedback();

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 p-8 sm:p-16">
      <Button className="px-4 py-2" onClick={() => router.back()}>
        {t("back")}
      </Button>
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {t("feedbackIntro")}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {t("feedbackSubIntro")}
          </p>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t("feedbackTitle")}
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder={t("feedbackPlaceholder")}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t("feedbackContent")}
                </label>
                <div className="mt-2">
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={t("feedbackPlaceholder")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-8 py-4 sm:px-8">
            <button
              onClick={() => {
                setTitle("");
                setContent("");
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {t("feedbackReset")}
            </button>
            {/* <button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => {
                await handleSave(title, content);
              }}
              className="flex gap-1 items-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("feedbackSave")}
              {isloading && <FaSpinner className="animate-spin" />}
            </button> */}
            <Button
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={async () => {
                await handleSave(title, content);
              }}
              className="px-4 py-2"
            >
              {t("feedbackSave")}
              {isloading && <FaSpinner className="animate-spin" />}
            </Button>
          </div>
        </div>
      </div>

      {visibleNotification && (
        <NotificationsVT
          type={addFeedbackStatus}
          info={
            addFeedbackStatus === "success"
              ? t("addFeedbackOkInfo")
              : t("addFeedbackErrorInfo")
          }
          subInfo={
            addFeedbackStatus === "success"
              ? t("addFeedbackOkSubInfo")
              : t("addFeedbackErrorSubInfo")
          }
          resetStatus={resetStatus}
        ></NotificationsVT>
      )}
    </div>
  );
};

export default FeedbackPage;
