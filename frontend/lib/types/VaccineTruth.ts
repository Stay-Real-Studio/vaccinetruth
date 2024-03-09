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
  handleGetTimelineEvent: (
    lng: string,
    stage: number
  ) => Promise<TimelineEvent[]>;
};

export type TimelineEvent = {
  datetime: string;
  content: string;
};
export type ResponseTimeline = {
  data: TimelineEvent[];
  status: string;
};
