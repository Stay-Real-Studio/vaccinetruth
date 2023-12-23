export const getBrowserLang = (): string => {
  if (typeof window === "undefined") {
    return "en";
  }
  const browserLang: string = navigator.language;

  let defaultBrowserLang = "";
  if (
    browserLang.toLowerCase() === "us" ||
    browserLang.toLowerCase() === "en" ||
    browserLang.toLowerCase() === "en_us"
  ) {
    defaultBrowserLang = "en";
  } else {
    defaultBrowserLang = "zh_cn";
  }

  return defaultBrowserLang;
};

export const QUESTION_LIST_ZH_CN = [
  "新冠病毒的起源是哪里?",
  "文贵先生针对新冠病毒疫苗在什么时间点发出过警告?",
  "美国疫苗伤害听证会中, 提到了哪些新冠疫苗伤害?",
  "CDC参与了新冠病毒功能增强实验吗?",
  "新冠疫苗对长期健康有哪些潜在影响？",
  "目前几种新冠疫苗的副作用有哪些？",
  "如何辨别哪些是新冠疫苗副作用？",
  "新冠疫苗副作用有哪些权威机构提供的证明？",
  "新冠疫苗副作用的相关数据？",
  "伊维菌素对治疗新冠病毒感染的作用？",
  "青蒿素对治疗新冠病毒感染的作用？",
  "医生推广新冠疫苗可以获得多少钱？",
  "新冠疫苗接种后，是否会影响月经周期或强度？",
];
export const QUESTION_LIST_EN = [
  "Where is the origin of the Covid-19 virus?",
  "What Miles Guo says about Covid-19 virus and COVID-19 vaccine?",
  "What COVID-19 vaccine injuries were discussed in the US Congress hearing?",
  "Is the CDC involved in the new coronavirus function enhancement experiment?",
  "What are the potential long-term health effects of the COVID-19 vaccine?",
  "What are the side effects of the current COVID-19 vaccines?",
  "How to identify COVID-19 vaccine side effects?",
  "What authoritative organizations provide proof of COVID-19 vaccine side effects?",
  "Relevant data on the side effects of the new coronavirus vaccine?",
  "What is the role of ivermectin in treating COVID-19?",
  "What is the role of artemisinin in treating COVID-19?",
  "How much money do doctors get for promoting COVID-19 vaccines?",
  "Will the menstrual cycle or intensity be affected after receiving the COVID-19 vaccine?",
];

export const getRandomQuestion = (
  lang: string | undefined,
  count: number
): string[] => {
  const sourceArr =
    lang === "en" ? QUESTION_LIST_EN.slice() : QUESTION_LIST_ZH_CN.slice();
  const res: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * sourceArr.length);
    res.push(sourceArr[randomIndex]);
    sourceArr.splice(randomIndex, 1);
  }

  return res.slice(0, count);
};

export const updateQuestion = (
  lang: string | undefined,
  questions: string[],
  question: string
): string[] => {
  const sourceArr =
    lang === "en" ? QUESTION_LIST_EN.slice() : QUESTION_LIST_ZH_CN.slice();

  const unAskedQuestions = sourceArr.filter(
    (item: string) => !questions.includes(item)
  );

  const filterExistedQuestions = questions.filter(
    (item: string) => item !== question
  );

  if (unAskedQuestions.length > 0) {
    filterExistedQuestions.unshift(unAskedQuestions[0]);
  }

  return filterExistedQuestions;
};
