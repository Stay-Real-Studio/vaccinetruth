"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";

export const useSecurity = (): {
  isStudioMember: boolean;
  isRouteAccessible: boolean;
} => {
  const [isStudioMember, setIsStudioMember] = useState<boolean>(false);

  const { session } = useSupabase();
  const path = usePathname();

  const securityPages = ["/login", "/chat", "/share", "/user"];
  const isRouteAccessible =
    path === "/" ||
    securityPages.some((page: string) => path?.startsWith(page));

  useEffect(() => {
    if (session?.user && session.user.email !== undefined) {
      setIsStudioMember(session.user.email.indexOf("@stayreal.studio") !== -1);
    }
  }, [session?.user]);

  return { isStudioMember, isRouteAccessible };
};
