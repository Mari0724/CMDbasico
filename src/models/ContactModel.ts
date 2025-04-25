import { z } from "zod";

// Esquema de validación con Zod
export const contactSchema = z.object({
    companyId: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    position: z.string(),
    status: z.enum(["active", "inactive"]),
});

// Tipo TypeScript para entrada de datos
export type ContactInput = z.infer<typeof contactSchema>;
