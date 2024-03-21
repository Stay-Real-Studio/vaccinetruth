import { NextRequest, NextResponse } from "next/server";

import { sanityClient } from "@/lib/api/feedback/utils";
import { StageMap, TimelineEvent } from "@/lib/types/VaccineTruth";
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GET = async (request: NextRequest) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const searchParams = request.nextUrl.searchParams;
  const lng = searchParams.get("lng") as string;
  const stage = Number(searchParams.get("stage"));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result: TimelineEvent[] = await sanityClient.fetch(
    `*[_type=="timeline"  ] | order(datetime asc) {datetime, "content": content['${lng}']}`
  );

  const res = filterStage(stage, result);

  return NextResponse.json(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { data: res, status: "success" },
    { status: 200 }
  );
};

const filterStage = (
  stage: number,
  result: TimelineEvent[]
): TimelineEvent[] => {
  let res = [];
  const stageMap: StageMap = {
    0: ["2019", "2020"],
    1: ["2021", "2022"],
    2: ["2023", "2024"],
  };
  res = result.filter((item) => {
    return stageMap[stage].includes(item.datetime.split("-")[0]);
  });

  return res;
};
