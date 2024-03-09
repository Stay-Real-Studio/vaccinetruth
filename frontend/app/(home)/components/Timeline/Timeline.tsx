/* eslint-disable max-lines */
"use client";

import { Tab } from "@headlessui/react";
import { useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaSpinner } from "react-icons/fa";

import { TimelineEvent } from "@/lib/types/VaccineTruth";
import { cn } from "@/lib/utils";

// eslint-disable-next-line import/order
import { Container } from "../Container";
// eslint-disable-next-line import/order
import { useTimeline } from "./useTimeline";
// eslint-disable-next-line import/order
import { DiamondIcon } from "./DiamondIcon";

const ImageClipPaths = ({
  id,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { id: string }) => {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Timeline = (): JSX.Element => {
  const id = useId();
  const [tabOrientation, setTabOrientation] = useState("horizontal");
  const { t } = useTranslation(["vaccineTruth"]);

  const { handleGetTimelineEvent } = useTimeline();
  const { i18n } = useTranslation();
  const [stage, setStage] = useState<number>(0);
  const [eventList, setEventList] = useState<TimelineEvent[]>([]);
  const [isloading, setIsloading] = useState<boolean>(false);

  const days = [
    {
      name: t("StageOne"),
      date: "2019-2020",
      dateTime: "2019-2020",
    },
    {
      name: t("StateTwo"),
      date: "2021-2022",
      dateTime: "2021-2022",
    },
    {
      name: t("StageThree"),
      date: "2023-2024",
      dateTime: "2023-2024",
    },
  ];

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    const onMediaQueryChange = ({ matches }: { matches: boolean }) => {
      setTabOrientation(matches ? "vertical" : "horizontal");
    };

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    void getTimelineEvent(i18n.language, stage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, i18n.language]);

  const getTimelineEvent = async (lng: string, stageName: number) => {
    setIsloading(true);
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const res = await handleGetTimelineEvent(lng, stageName);
    setIsloading(false);
    setEventList(res);
  };

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter  sm:text-5xl homePageSubText"
          >
            {t("timelineTitle")}
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight homePageSubText">
            {t("timelineSubTitle")}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div
                      key={day.dateTime}
                      className="relative lg:pl-8"
                      onClick={() => setStage(dayIndex)}
                    >
                      <DiamondIcon
                        className={cn(
                          "absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block",
                          dayIndex === selectedIndex
                            ? "fill-blue-600 stroke-blue-600"
                            : "fill-transparent stroke-slate-400"
                        )}
                      />
                      <div className="relative">
                        <div
                          className={cn(
                            "font-mono text-sm",
                            dayIndex === selectedIndex
                              ? "text-blue-600"
                              : "homePageSubText"
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight homePageText"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {!isloading &&
                  eventList.length > 0 &&
                  eventList.map((speaker, speakerIndex) => (
                    <div key={speakerIndex}>
                      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl hidden">
                        <div
                          className={cn(
                            "absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                            [
                              "border-blue-300",
                              "border-indigo-300",
                              "border-sky-300",
                            ][speakerIndex % 3]
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50 "
                          style={{
                            clipPath: `url(#${id}-${speakerIndex % 3})`,
                          }}
                        ></div>
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight homePageText">
                        {speaker.datetime}
                      </h3>
                      <p className="mt-1 text-base tracking-tight homePageSubText">
                        {speaker.content}
                      </p>
                    </div>
                  ))}

                {!isloading && eventList.length === 0 && (
                  <div>{t("noData")}</div>
                )}
                {isloading && <FaSpinner className="animate-spin" />}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
};
