/* eslint-disable max-lines */
import { default as TiptapMention } from "@tiptap/extension-mention";
import { PluginKey } from "@tiptap/pm/state";
import { ReactRenderer } from "@tiptap/react";
import { SuggestionOptions } from "@tiptap/suggestion";
import { RefAttributes, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Instance } from "tippy.js";

import { useBrainContext } from "@/lib/context/BrainProvider/hooks/useBrainContext";

import { MentionListRef } from "../components/MentionsList/MentionsList";
import { MentionListProps } from "../components/MentionsList/types";
import { SuggestionData, SuggestionItem } from "../types";

type UseMentionConfigProps = {
  char: string;
  suggestionData: SuggestionData;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useMentionConfig = ({
  char,
  suggestionData,
}: UseMentionConfigProps) => {
  const { allBrains, currentBrainId } = useBrainContext();

  const { t } = useTranslation(["vaccineTruth"]);

  const mentionKey = `mention${char}`;
  const items = suggestionData.items;

  const currentBrain = allBrains.find((brain) => brain.id === currentBrainId);

  const suggestionsConfig = useMemo<
    Omit<SuggestionOptions<SuggestionItem>, "editor">
  >(
    () => ({
      char,
      allowSpaces: true,
      pluginKey: new PluginKey(mentionKey),
      items: ({ query }) =>
        items.filter((item) =>
          item.label.toLowerCase().startsWith(query.toLowerCase())
        ),
      render: () => {
        let reactRenderer:
          | ReactRenderer<
              MentionListRef,
              MentionListProps & RefAttributes<MentionListRef>
            >
          | undefined;
        let popup: Instance[] | undefined;

        return {
          onStart: () => {
            return;
          },
          onUpdate: (props) => {
            reactRenderer?.updateProps({
              ...props,
              suggestionData: {
                ...suggestionData,
                items: props.items,
              },
            });
          },
          onKeyDown: (props) => {
            if (props.event.key === "Escape") {
              popup?.[0].hide();

              return true;
            }

            return reactRenderer?.ref?.onKeyDown(props) ?? false;
          },
          onExit: () => {
            popup?.[0].destroy();
            reactRenderer?.destroy();
          },
        };
      },
    }),
    [char, items, mentionKey, suggestionData]
  );

  const Mention = TiptapMention.extend({
    name: mentionKey,
  }).configure({
    HTMLAttributes: {
      class: `dark:bg-gray-600 text-black p-1 bg-gray-200  dark:text-vt-50 rounded-md`,
    },
    suggestion: suggestionsConfig,
    renderLabel: () => {
      return (
        (currentBrain?.id === process.env.NEXT_PUBLIC_DEFAULT_BRAIN_ID
          ? t("kbVersion", { version: "v0.2" })
          : currentBrain?.name) ?? t("kbVersion", { version: "v0.2" })
      );
    },
  });

  return {
    Mention,
  };
};
