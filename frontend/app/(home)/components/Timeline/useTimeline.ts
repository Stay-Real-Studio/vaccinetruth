import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  GetTimelineEventsResponse,
  TimelineEvent,
  UseTimeline,
} from "@/lib/types/VaccineTruth";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTimeline = (): UseTimeline => {
  const [currentStage, setCurrentStage] = useState<number>(0);

  const { i18n } = useTranslation();

  const { data: timelineEvents, isLoading } = useQuery({
    queryFn: () => handleGetTimelineEvent(i18n.language, currentStage),
    queryKey: ["timeline", i18n.language, currentStage],
  });

  const handleGetTimelineEvent = async (
    lng: string,
    stage: number
  ): Promise<TimelineEvent[]> => {
    const params = new URLSearchParams();
    params.append("lng", lng);
    params.append("stage", stage.toString());

    const result = await fetch(`/api/timeline?${params.toString()}`, {
      method: "GET",
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const res: GetTimelineEventsResponse = await result.json();

    if (res.status === "success") {
      return res.data;
    }

    return [];
  };

  return {
    isLoading,
    setCurrentStage,
    timelineEvents: timelineEvents ? timelineEvents : [],
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleGetTimelineEvent,
  };
};
