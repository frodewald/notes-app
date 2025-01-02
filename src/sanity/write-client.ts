import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: "834wvizi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: 'skqT4O56LUqVsFTADAmzj3DfwxIQvv4UDleOr3FJKoFzuAFrHdRpgJQOHaCepJ6pdTqOJ0OO7XuyGitKvk0TDumV5l6T6QvsG4S9XIQgHtGW3m0Eqk5qYQMtOsLKL0bsrjN8mVDynrcU5SAERkllvxW2oxM6zjkfpNN9ZxEM5VrLmfVW9MsL'
});