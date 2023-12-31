/* eslint-disable max-lines */
"use client";

import { useState } from "react";

import { RespnseFeedback, SaveFeedback } from "@/lib/types/VaccineTruth";

export const useFeedback = (): SaveFeedback => {
  const [addFeedbackStatus, setAddFeedbackStatus] = useState<string>("");
  const [visibleNotification, setVisibleNotification] =
    useState<boolean>(false);
  const [isloading, setIsloading] = useState<boolean>(false);

  const handleSave = async (
    title: string | undefined,
    content: string | undefined
  ) => {
    try {
      setIsloading(true);
      const result = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ title, content }),
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const res: RespnseFeedback = await result.json();

      if (res.status === "success") {
        setIsloading(false);
        setVisibleNotification(true);
        setAddFeedbackStatus("success");
      }
    } catch (e) {
      setIsloading(false);
      setVisibleNotification(true);
      setAddFeedbackStatus("error");
    }
  };

  const resetStatus = () => {
    setAddFeedbackStatus("");
    setVisibleNotification(false);
  };

  return {
    isloading,
    handleSave,
    addFeedbackStatus,
    setAddFeedbackStatus,
    visibleNotification,
    setVisibleNotification,
    resetStatus,
  };
};
