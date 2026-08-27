import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "ea319s2e",
  dataset: "production",
  apiVersion: "2026-08-27",
  useCdn: true,
});