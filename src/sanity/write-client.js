import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: false,
  token: import.meta.env.VITE_SANITY_WRITE_TOKEN,
});