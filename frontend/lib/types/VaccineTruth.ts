export type HelpOption = {
  label: string;
  needAuth: boolean;
};

export type SaveFeedback = {
  handleSave: (
    title: string | undefined,
    content: string | undefined
  ) => Promise<void>;
};
