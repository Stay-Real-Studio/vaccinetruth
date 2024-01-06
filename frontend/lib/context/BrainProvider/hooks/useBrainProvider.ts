/* eslint-disable max-lines */
import { UUID } from "crypto";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { useBrainFetcher } from "@/app/brains-management/[brainId]/components/BrainManagementTabs/hooks/useBrainFetcher";
import { CreateBrainInput } from "@/lib/api/brain/types";
import { useBrainApi } from "@/lib/api/brain/useBrainApi";
import { usePromptApi } from "@/lib/api/prompt/usePromptApi";
import { useToast } from "@/lib/hooks";
import { Prompt } from "@/lib/types/Prompt";
import { useEventTracking } from "@/services/analytics/june/useEventTracking";
import { useSecurity } from "@/services/useSecurity/useSecurity";

import { MinimalBrainForUser } from "../types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useBrainProvider = () => {
  const { isStudioMember } = useSecurity();
  const { publish } = useToast();
  const { track } = useEventTracking();
  const { createBrain, deleteBrain, getBrains, getDefaultBrain } =
    useBrainApi();
  const { getPublicPrompts } = usePromptApi();
  const { t } = useTranslation(["delete_or_unsubscribe_from_brain"]);

  const [allBrains, setAllBrains] = useState<MinimalBrainForUser[]>([]);
  const [currentBrainId, setCurrentBrainId] = useState<null | UUID>(null);
  const [defaultBrainId, setDefaultBrainId] = useState<UUID>();
  const [isFetchingBrains, setIsFetchingBrains] = useState(true);
  const [publicPrompts, setPublicPrompts] = useState<Prompt[]>([]);
  const [currentPromptId, setCurrentPromptId] = useState<null | string>(null);

  const currentPrompt = publicPrompts.find(
    (prompt) => prompt.id === currentPromptId,
  );
  const currentBrain = allBrains.find((brain) => brain.id === currentBrainId);
  const { brain: currentBrainDetails } = useBrainFetcher({
    brainId: currentBrainId ?? undefined,
  });

  const fetchAllBrains = useCallback(async () => {
    setIsFetchingBrains(true);
    try {
      const brains = await getBrains();
      setAllBrains(brains);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingBrains(false);
    }
  }, [getBrains]);

  const createBrainHandler = useCallback(
    async (brain: CreateBrainInput): Promise<UUID | undefined> => {
      const createdBrain = await createBrain(brain);
      try {
        setCurrentBrainId(createdBrain.id);

        void track("BRAIN_CREATED", {
          brainType: brain.brain_type,
        });

        void fetchAllBrains();

        return createdBrain.id;
      } catch {
        publish({
          variant: "danger",
          text: "Error occurred while creating a brain",
        });
      }
    },
    [createBrain, fetchAllBrains, publish, track],
  );

  const deleteBrainHandler = useCallback(
    async (id: UUID) => {
      await deleteBrain(id);
      setAllBrains((prevBrains) =>
        prevBrains.filter((brain) => brain.id !== id),
      );
      void track("DELETE_BRAIN");
      publish({
        variant: "success",
        text: t("successfully_deleted"),
      });
    },
    [deleteBrain, publish, track],
  );

  /**
   * Fetches the default brain either from the environment variable or from the user's default brain.
   * If a brain ID is found, it sets the default brain ID and if the current brain ID is null, it also sets the current brain ID.
   * This function is memoized using `useCallback` to prevent unnecessary re-renders.
   *
   * @async
   * @function
   * @returns {Promise<void>}
   */
  const fetchDefaultBrain = useCallback(async () => {
    const userDefaultBrain = await getDefaultBrain();
    const envDefaultBrainId = process.env.NEXT_PUBLIC_DEFAULT_BRAIN_ID as
      | UUID
      | undefined;
    if (!isStudioMember) {
      const brainId = envDefaultBrainId ?? userDefaultBrain?.id;
      setDefaultBrainId(brainId);
      setCurrentBrainId(brainId as UUID | null);
    } else {
      setDefaultBrainId(userDefaultBrain?.id);
      setCurrentBrainId(userDefaultBrain?.id as UUID | null);
    }
  }, [getDefaultBrain, isStudioMember]);

  const fetchPublicPrompts = useCallback(async () => {
    setPublicPrompts(await getPublicPrompts());
  }, [getPublicPrompts]);

  return {
    allBrains,
    fetchAllBrains,
    isFetchingBrains,

    currentBrain,
    currentBrainDetails,
    currentBrainId,
    setCurrentBrainId,

    defaultBrainId,
    fetchDefaultBrain,

    fetchPublicPrompts,
    publicPrompts,
    currentPrompt,

    setCurrentPromptId,
    currentPromptId,

    createBrain: createBrainHandler,

    deleteBrain: deleteBrainHandler,
  };
};
