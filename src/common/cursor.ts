import { z } from "zod";

export const cursorSchema = z.union([
  z.object({
    first: z.number({ coerce: true }).default(10),
    after: z.string(),
  }),
  z.object({
    last: z.number({ coerce: true }).default(10),
    before: z.string(),
  }),
]);
