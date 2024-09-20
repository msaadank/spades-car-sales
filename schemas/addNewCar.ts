import { object, z } from "zod";


export const addNewCarValidation = z.object({
    title: z.string(),
    description: z.string().max(800, {message: "Description must be less than 800 characters"}),
    make: z.string(),
    model: z.string(),
    variant: z.string(),
    year: z.number(),
    price: z.string(),
    color: z.string(),
    gear: z.string(),
    fuel: z.string(),
    mileage: z.string(),
    images: z.object({url: z.string()}).array(),
})