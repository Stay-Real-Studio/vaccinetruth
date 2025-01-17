"use client";

import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useDiclaimer = (defaultVisibleDisclaimer: boolean) => {
  const [visibleDisclaimer, setVisibleDisclaimer] = useState<boolean>(
    defaultVisibleDisclaimer
  );

  const WEEK_TIME = 7 * 24 * 3600 * 1000;

  let close_disclaimer_time: string | null = "";

  const handleCloseDisclaimer = () => {
    setVisibleDisclaimer(false);

    const closeTime = new Date().getTime();
    localStorage.setItem("close_disclaimer_time", closeTime.toString());
  };

  useEffect(() => {
    close_disclaimer_time = localStorage.getItem("close_disclaimer_time") ?? "";
    checkDiclaimerVisible();
  }, []);

  const checkDiclaimerVisible = () => {
    if (close_disclaimer_time === "") {
      return;
    }
    updateDisclaimerNextVisibleTime();
  };

  const updateDisclaimerNextVisibleTime = () => {
    const diff = new Date().getTime() - Number(close_disclaimer_time);
    if (diff >= WEEK_TIME) {
      setVisibleDisclaimer(true);
    } else {
      setVisibleDisclaimer(false);
    }
  };

  const handleVisibleDisclaimer = () => {
    localStorage.setItem("close_disclaimer_time", "");

    setVisibleDisclaimer(true);
  };

  return {
    visibleDisclaimer,
    handleCloseDisclaimer,
    handleVisibleDisclaimer,
  };
};
