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
  "美国疫苗伤害听证会中, 提到了哪些疫苗伤害?",
  "CDC参与了新冠病毒功能增强实验吗?",
  "接种新冠疫苗后，如何辨别正常的副作用和需要就医的症状？",
  "对于有特定健康问题（如自身免疫疾病）的人来说，接种新冠疫苗的风险是什么？",
  "儿童和青少年接种新冠疫苗的安全性如何？",
  "孕妇接种新冠疫苗是否安全？",
  "在政府强制接种的情况下，如果出现副作用，我有权获得赔偿吗？",
  "如何证明我的副作用是由新冠疫苗引起的？",
  "政府对于强制接种新冠疫苗后出现的健康问题承担何种责任？",
  "如果我被迫接种疫苗并出现严重副作用，我应该向谁求助？",
  "在新冠疫苗引起的严重后遗症或死亡事件中，受害者家属可以要求什么样的赔偿？",
  "接种疫苗后，有哪些症状是紧急情况，需要立即就医？",
  "新冠疫苗接种后，是否会影响月经周期或强度？",
];
export const QUESTION_LIST_EN = [
  "Where is the origin of the Covid-19 virus?",
  "What Miles Guo says about Covid-19 virus and vaccine?",
  "What vaccine injuries were discussed in the US Congress hearing?",
  "Is the CDC involved in the new coronavirus function enhancement experiment?",
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
