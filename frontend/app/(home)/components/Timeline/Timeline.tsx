/* eslint-disable max-lines */
"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

import andrewGreeneImage from "./images/avatars/andrew-greene.jpg";
import damarisKimuraImage from "./images/avatars/damaris-kimura.jpg";
import dianneGuilianelliImage from "./images/avatars/dianne-guilianelli.jpg";
import erhartCockrinImage from "./images/avatars/erhart-cockrin.jpg";
import heatherTerryImage from "./images/avatars/heather-terry.jpg";
import ibrahimFraschImage from "./images/avatars/ibrahim-frasch.jpg";
import jaquelinIschImage from "./images/avatars/jaquelin-isch.jpg";
import parkerJohnsonImage from "./images/avatars/parker-johnson.jpg";
import ronniCantadoreImage from "./images/avatars/ronni-cantadore.jpg";
import stevenMchailImage from "./images/avatars/steven-mchail.jpg";
// eslint-disable-next-line import/order
import { Container } from "./Container";
// eslint-disable-next-line import/order
import { DiamondIcon } from "./DiamondIcon";

const days = [
  {
    name: "Stage One",
    date: "2019-2020",
    dateTime: "2019-2020",
    speakers: [
      {
        name: "2019年12月31日",
        role: "武汉卫健委报告第一例武汉肺炎病例",
        image: stevenMchailImage,
      },
      {
        name: "2020年1月20日",
        role: "中共官方承认新冠病毒人传人",
        image: jaquelinIschImage,
      },
      {
        name: "2020年1月23日",
        role: "武汉封城",
        image: dianneGuilianelliImage,
      },
      {
        name: "2020年1月25号前后",
        role: "中共军方陈薇少将接管武汉P4实验室",
        image: ronniCantadoreImage,
      },
      {
        name: "2020年2月2日",
        role: "郭文贵先生爆料，冠状病毒不是灾难，新冠病毒 是共产党屠杀全世界的生化武器，但推出新冠疫苗才是目的，疫苗才是灾难，新冠疫苗才是真正的杀人工具",
        image: ronniCantadoreImage,
      },
      {
        name: "2020年2月26日",
        role: "在3月3日，网上流传出了新冠重组疫苗的照片，随即官媒辟谣。央视在2020年9月1日播出的“开学第一课“节目中，作为嘉宾的陈薇亲口宣称，2月26日第一批新冠疫苗就下线",
        image: erhartCockrinImage,
      },
      {
        name: "2020年3月16日",
        role: "获批启动临床试验，（一期临床这个时候才开始，是什么给了他们勇气在2020年2月底已经开始大规模生产了呢）",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年3月底",
        role: "完成了一期临床试验受试者接种工作",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年4月12日",
        role: "启动了二期临床试验。（一期试验结束2周还没到，一期临床的数据还没有呢就开始二期了，这是心大还是压根觉得不需要？）",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年5月22日",
        role: "在柳叶刀公布一期临床数据",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年7月20日",
        role: "在柳叶刀公布二期临床数据（临床结果表明接种疫苗组95%产生了抗体，同时72%左右出现发热、疲劳和注射部位疼痛等不良反应，高剂量组9%出现三级不良反应。想象一下大规模接种是多么可怕。）",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年8月初 ",
        role: "国家知识产权管理局对外发布了陈薇团队研发的新冠疫苗专利（三期还没做呢）",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年9月初 ",
        role: "陈薇表示目前已经开始三期临床，由于国内疫情控制得好，没有足够的试验对象，所以主要向海外推广",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年12月 ",
        role: "美国食品药品监督管理局(FDA) 欺诈性地为危险且未经测试的Covid-19“疫苗”颁发“紧急使用授权”(EUA)",
        image: parkerJohnsonImage,
      },
      {
        name: "2020年12月17日",
        role: "法国病毒学家，2008年诺贝尔生理学或医学奖获得者，吕克·蒙塔尼耶接受采访时表示：新冠疫苗病毒改变自然演变规律…序列不仅有艾滋病病毒、还有疟原虫、疟疾",
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: "State Two",
    date: "2021-2022",
    dateTime: "2021-2022",
    speakers: [
      {
        name: "2021年8月30日",
        role: "文贵大直播中爆料：青蒿素是新冠病毒和疫苗的解药。",
        image: damarisKimuraImage,
      },
      {
        name: "2021年11月26日",
        role: "德国爆料者Andreas Novak医生，在发布有关氧化石墨烯和氢氧化石墨烯的最新视频几个小时后突然去世。被谋杀",
        image: damarisKimuraImage,
      },
      {
        name: "2021年12月",
        role: "由Larry Pavlevsky博士、Robert Reinders博士、Alvin Moss博士、James Neueschwander博士主持的一场座谈会中讨论的新冠疫苗中关于氢氧化石墨乙烯、用于制造刺突蛋白的信使RNA、脂质纳米颗粒、聚乙二醇、以及关于自然抗体与疫苗抗体政策的突然改变，关于这些内容其实是以上几位医学界专家关于新冠疫苗的最早揭示",
        image: damarisKimuraImage,
      },
      {
        name: "2022年1月",
        role: "RmRNA 技术的关键创始人之一罗伯特·马龙(Robert Malone)博士揭露了这种技术对人类健康的可怕影响，并让全世界知道血栓疫苗可以像艾滋病一样削弱人体免疫系统",
        image: ibrahimFraschImage,
      },
    ],
  },
  {
    name: "Stage Three",
    date: "2023-2024",
    dateTime: "2023-2024",
    speakers: [
      {
        name: "2023年2月",
        role: "爆料人萨沙·拉蒂波娃(Sasha Latypova)透露了大型制药公司和美国疾控中心(CDC )对真正有效的Covid-19药物的即时审查，包括伊维菌素和羟氯喹的即时审查",
        image: andrewGreeneImage,
      },
      {
        name: "2023年3月8号",
        role: "被川普总统任命为疾控中心CDC主任Dr. Redfield在国会重申了他2021年的观点：‘大流行是由实验室泄露引起的，这个结论主要是基于病毒本身的生物学特征和病毒在人与人之间传播能力太强了，不可能是直接从动物传播给人的自然结果，而是病毒易感人的功能获得来自于人工基因改造的结果’",
        image: andrewGreeneImage,
      },
      {
        name: "2024年1月5日",
        role: "Bret Weinstein 博士在卡尔森节目中以科学家身份揭露新冠疫苗灾难，并提及中共参与其中。",
        image: heatherTerryImage,
      },
    ],
  },
];

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
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Covid-19 Vaccine Timeline
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Is the Covid-19 vaccine safe and effective when it is introduced to
            the market so quickly? Let us see what happened before and after
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
                    <div key={day.dateTime} className="relative lg:pl-8">
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
                              : "text-slate-500"
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
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
                {day.speakers.map((speaker, speakerIndex) => (
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
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className=" absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  );
};
