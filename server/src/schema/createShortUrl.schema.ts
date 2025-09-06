import { z } from "zod";

export const createShortURLSchema = z.object({
  body: z.object({
    destination: z
      .url({ message: "Must be a valid URL" })
      .min(1, "Destination is required"),
  }),
});
