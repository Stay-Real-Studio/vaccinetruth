import { NextRequest, NextResponse } from "next/server";

import { sanityClient } from "@/lib/api/feedback/utils";
import { FeedbackItem } from "@/lib/types/VaccineTruth";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const POST = async (request: NextRequest) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { title, content } = await request.json();

  const feedback: FeedbackItem = {
    _type: "feedback",
    title: title as string,
    content: content as string,
  };
  const result = await sanityClient.create(feedback);

  return NextResponse.json(
    { data: result, status: "success" },
    { status: 200 }
  );
};
