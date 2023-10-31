"use client";
import { ReactNode } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";
import { redirectToChat } from "@/lib/router/redirectToChat";
import { redirectToLogin } from "@/lib/router/redirectToLogin";
import { useRoleCtrl } from "@/services/roleCtrl/useRoleCtrl";

import { BrainsList } from "./[brainId]/components";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isStudioMember } = useRoleCtrl();

  const { session } = useSupabase();
  if (session === null) {
    redirectToLogin();
  }
  if (!isStudioMember) {
    redirectToChat();
  }

  return (
    <div className="relative h-full w-full flex justify-stretch items-stretch">
      <BrainsList />
      {children}
    </div>
  );
};

export default Layout;
