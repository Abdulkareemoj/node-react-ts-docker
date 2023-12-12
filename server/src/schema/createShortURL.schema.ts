import { z } from "zod";

export default z.object({
  destination: z.string().url("Must be a valid url").nonempty(
    "Destination required",
  ),
});
