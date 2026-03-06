import { z } from "zod";

export const addSchoolValidator = z.object({
    name: z.string().min(1),
    address: z.string().min(1),
    latitude: z.number().min(1),
    longitude: z.number().min(1)
})

export const getSchoolsusingParametersValidator = z.object({
    latitude: z.number().min(1),
    longitude: z.number().min(1)
})