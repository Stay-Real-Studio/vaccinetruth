"use client";

import { useEffect, useState } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";

export const useRoleCtrl = (): { isStudioMember: boolean } => {
  const [isStudioMember, setIsStudioMember] = useState<boolean>(false);

  const { session } = useSupabase();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (session?.user.email) {
      setIsStudioMember(session.user.email.indexOf("@stayreal.studio") !== -1);
    }
  }, [session?.user.email]);

  return { isStudioMember };
};
