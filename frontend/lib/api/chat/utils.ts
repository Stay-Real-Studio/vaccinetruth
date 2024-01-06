/* eslint-disable max-lines */
import { HelpOption } from "@/lib/types/VaccineTruth";
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

export const QUESTION_LIST_zh_cn = [
  "新冠病毒的起源是是不是武汉P4实验室?",
  "文贵先生针对新冠病毒疫苗在什么时间点发出过警告?",
  "美国疫苗伤害听证会中, 提到了哪些新冠疫苗伤害?",
  "CDC参与了新冠病毒功能增强实验吗?",
  "新冠疫苗对长期健康有哪些潜在影响？",
  "目前几种新冠疫苗的副作用有哪些？",
  "新冠疫苗副作用有哪些权威机构提供的证明？",
  "新冠疫苗副作用的相关数据？",
  "青蒿素对治疗新冠病毒感染的作用？",
  "伊维菌素对治疗新冠病毒感染的作用？",
  "医生在推广新冠疫苗的过程中, 是否可以获利？",
  "新冠疫苗接种后，是否会影响月经周期或强度？",
];
export const QUESTION_LIST_en = [
  "Is the origin of the Covid-19 virus Wuhan P4 virus lab?",
  "What Miles Guo says about Covid-19 virus and COVID-19 vaccine?",
  "What COVID-19 vaccine injuries were discussed in the US Congress hearing?",
  "Is the CDC involved in the new coronavirus function enhancement experiment?",
  "What are the potential long-term health effects of the COVID-19 vaccine?",
  "What are the side effects of the current COVID-19 vaccines?",
  "What authoritative organizations provide proof of COVID-19 vaccine side effects?",
  "Relevant data on the side effects of the new coronavirus vaccine?",
  "What is the role of ivermectin in treating COVID-19?",
  "What is the role of artemisinin in treating COVID-19?",
  "How much money do doctors get for promoting COVID-19 vaccines?",
  "Will the menstrual cycle or intensity be affected after receiving the COVID-19 vaccine?",
];
export const QUESTION_LIST_ru = [
  "Является ли происхождение вируса Covid-19 Уханьской вирусной лабораторией P4?",

  "Что Майлз Го говорит о вирусе Covid-19 и вакцине от Covid-19?",

  "Какие повреждения вакцины от COVID-19 обсуждались на слушаниях в Конгрессе США?",

  "Участвует ли CDC в новом эксперименте по усилению функций коронавируса?",

  "Каковы потенциальные долгосрочные последствия вакцины против COVID-19 для здоровья?",

  "Каковы побочные эффекты нынешних вакцин против COVID-19?",

  "Какие авторитетные организации предоставляют доказательства побочных эффектов вакцины против COVID-19?",

  "Актуальные данные о побочных эффектах новой вакцины от коронавируса?",

  "Какова роль ивермектина в лечении COVID-19?",

  "Какова роль артемизинина в лечении COVID-19?",

  "Сколько денег получают врачи за продвижение вакцины от COVID-19?",

  "Изменится ли менструальный цикл или его интенсивность после получения вакцины от COVID-19?",
];
export const QUESTION_LIST_ptbr = [
  "A origem do vírus Covid-19 é o laboratório do vírus Wuhan P4?",

  "O que Miles Guo diz sobre o vírus Covid-19 e a vacina COVID-19?",

  "Quais lesões causadas pela vacina COVID-19 foram discutidas na audiência do Congresso dos EUA?",

  "O CDC está envolvido no experimento de aprimoramento da função do novo coronavírus?",

  "Quais são os potenciais efeitos na saúde a longo prazo da vacina COVID-19?",

  `Quais são os efeitos colaterais das atuais vacinas COVID-19?`,

  `Quais organizações autorizadas fornecem provas dos efeitos colaterais da vacina COVID-19?`,

  `Dados relevantes sobre os efeitos colaterais da vacina contra o novo coronavírus?`,

  `Qual é o papel da ivermectina no tratamento da COVID-19?`,

  `Qual é o papel da artemisinina no tratamento da COVID-19?`,

  `Quanto dinheiro os médicos recebem para promover as vacinas COVID-19?`,

  `O ciclo menstrual ou a intensidade serão afetados após receber a vacina COVID-19?`,
];
export const QUESTION_LIST_es = [
  "El origen del virus Covid-19 es el laboratorio del virus Wuhan P4?",

  "Qué dice Miles Guo sobre el virus Covid-19 y la vacuna COVID-19?",

  "Qué lesiones causadas por la vacuna COVID-19 se discutieron en la audiencia del Congreso de los Estados Unidos?",

  "Están los CDC involucrados en el experimento de mejora de la función del nuevo coronavirus?",

  "Cuáles son los posibles efectos a largo plazo sobre la salud de la vacuna COVID-19?",

  "Cuáles son los efectos secundarios de las actuales vacunas contra el COVID-19?",

  "Qué organizaciones autorizadas proporcionan pruebas de los efectos secundarios de la vacuna COVID-19?",

  "Datos relevantes sobre los efectos secundarios de la vacuna del nuevo coronavirus?",

  "Cuál es el papel de la ivermectina en el tratamiento de la COVID-19?",

  "Cuál es el papel de la artemisinina en el tratamiento de la COVID-19?",

  "Cuánto dinero reciben los médicos por promover las vacunas contra el COVID-19?",

  "Se verá afectado el ciclo o la intensidad menstrual tras recibir la vacuna contra el COVID-19?",
];
export const QUESTION_LIST_fr = [
  "L'origine du virus Covid-19 est-elle le laboratoire du virus Wuhan P4 ?",

  "Que dit Miles Guo à propos du virus Covid-19 et du vaccin COVID-19 ?",

  "De quelles blessures causées par le vaccin COVID-19 ont été discutées lors de l'audience du Congrès américain ?",

  "Le CDC est-il impliqué dans la nouvelle expérience d'amélioration de la fonction du coronavirus ?",

  "Quels sont les effets potentiels à long terme du vaccin contre la COVID-19 sur la santé ?",

  "Quels sont les effets secondaires des vaccins actuels contre la COVID-19 ?",

  "Quelles organisations faisant autorité fournissent la preuve des effets secondaires du vaccin COVID-19 ?",

  "Des données pertinentes sur les effets secondaires du nouveau vaccin contre le coronavirus ?",

  "Quel est le rôle de l'ivermectine dans le traitement du COVID-19 ?",

  "Quel est le rôle de l'artémisinine dans le traitement du COVID-19 ?",

  "Combien d'argent les médecins reçoivent-ils pour promouvoir les vaccins contre le COVID-19 ?",

  "Le cycle menstruel ou son intensité seront-ils affectés après avoir reçu le vaccin contre la COVID-19 ?",
];

export const getLangMap = (lang: string): string[] => {
  const langMap = new Map<string, string[]>();
  langMap.set("en", QUESTION_LIST_en);
  langMap.set("zh_cn", QUESTION_LIST_zh_cn);
  langMap.set("ru", QUESTION_LIST_ru);
  langMap.set("ptbr", QUESTION_LIST_ptbr);
  langMap.set("es", QUESTION_LIST_es);
  langMap.set("fr", QUESTION_LIST_fr);

  return langMap.get(lang) ?? [];
};
export const getRandomQuestion = (lang: string, count: number): string[] => {
  // const sourceArr =
  //   lang === "en" ? QUESTION_LIST_en.slice() : QUESTION_LIST_zh_cn.slice();
  const sourceArr = getLangMap(lang).slice();

  const res: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * sourceArr.length);
    res.push(sourceArr[randomIndex]);
    sourceArr.splice(randomIndex, 1);
  }

  return res.slice(0, count);
};

export const updateQuestion = (
  lang: string,
  questions: string[],
  question: string
): string[] => {
  // const sourceArr =
  //   lang === "en" ? QUESTION_LIST_en.slice() : QUESTION_LIST_zh_cn.slice();
  const sourceArr = getLangMap(lang).slice();

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

export const getHelpOptions = (isStudioMember: boolean): HelpOption[] => {
  const HelpOptions = [
    {
      label: "Disclaimer",
      needAuth: false,
    },
    {
      label: "BrainsManagement",
      needAuth: true,
    },
  ];
  if (isStudioMember) {
    return HelpOptions;
  } else {
    return HelpOptions.filter((item) => !item.needAuth);
  }
};
