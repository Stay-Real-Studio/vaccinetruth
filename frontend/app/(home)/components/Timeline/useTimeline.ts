import {
  ResponseTimeline,
  TimelineEvent,
  UseTimeline,
} from "@/lib/types/VaccineTruth";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useTimeline = (): UseTimeline => {
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
    const res: ResponseTimeline = await result.json();

    if (res.status === "success") {
      return res.data;
    }

    return [];
  };

  return {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    handleGetTimelineEvent,
  };
};
