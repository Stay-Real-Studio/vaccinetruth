/* eslint-disable max-lines */
"use client";

import { sanityClient } from "@/lib/api/feedback/utils";
import { SaveFeedback } from "@/lib/types/VaccineTruth";
export const useFeedback = (): SaveFeedback => {
  const handleSave = async (
    title: string | undefined,
    content: string | undefined
  ) => {
    await sanityClient.patch("feedback").set({ title, content }).commit();
  };

  return {
    handleSave,
  };
};
