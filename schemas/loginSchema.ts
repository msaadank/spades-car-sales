import { z } from "zod";

export const loginVerification = z.object({
    identifier: z.string().email({message: "Invalid Email entered!"}),
    password: z.string().min(1, {message: "Password required to login"})
})