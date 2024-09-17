import {z} from 'zod';

export const forgotPasswordSchema = z.object({
    code: z.string().length(6, "Otp code must be 6 digits")
})