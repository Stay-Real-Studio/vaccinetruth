// eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from "@sanity/client";

import { SANITY_DATASET } from "@/lib/api/feedback/config";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-12-29", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.SANITY_SECRET_TOKEN, // Only if you want to update content with the client
});
