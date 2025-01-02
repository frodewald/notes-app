import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "834wvizi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});