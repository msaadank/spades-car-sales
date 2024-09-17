import { z } from "zod";

export const loginVerification = z.object({
    identifier: z.string(),
    password: z.string()
})