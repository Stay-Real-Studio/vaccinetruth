export type HelpOption = {
  label: string;
  needAuth: boolean;
};

export type SaveFeedback = {
  isloading: boolean;
  handleSave: (
    title: string | undefined,
    content: string | undefined
  ) => Promise<void>;
  addFeedbackStatus: string;
  setAddFeedbackStatus: (addFeedbackOk: string) => void;
  visibleNotification: boolean;
  setVisibleNotification: (visibleNotification: boolean) => void;
  resetStatus: () => void;
};

export type FeedbackItem = {
  _type: string;
  title: string;
  content: string;
};

export type RespnseFeedback = {
  data: {
    _id: string;
    title: string;
    content: string;
  };
  status: string;
};

export type UseTimeline = {
  isLoading: boolean;
  handleGetTimelineEvent: (
    lng: string,
    stage: number
  ) => Promise<TimelineEvent[]>;
  timelineEvents: TimelineEvent[];
  setCurrentStage: (stage: number) => void;
};

export type TimelineEvent = {
  datetime: string;
  content: string;
};
export type GetTimelineEventsResponse = {
  data: TimelineEvent[];
  status: string;
};

export type StageMap = {
  [key: number]: string[];
};
