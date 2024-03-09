import { NextRequest, NextResponse } from "next/server";

import { sanityClient } from "@/lib/api/feedback/utils";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const GET = async (request: NextRequest) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const searchParams = request.nextUrl.searchParams;
  const lng = searchParams.get("lng") as string;
  const stage = Number(searchParams.get("stage"));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result = await sanityClient.fetch(
    `*[_type=="timeline" && stage == ${stage} ] | order(datetime asc) {datetime, "content": content['${lng}']}`
  );

  return NextResponse.json(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    { data: result, status: "success" },
    { status: 200 }
  );
};
