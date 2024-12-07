import { z } from "zod";

export const loginValidationSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid mobile number!"),
  password: z.string().min(6, "Password at least 6 character."),
});
