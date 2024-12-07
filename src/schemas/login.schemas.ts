import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email."),
  password: z.string().min(6, "Password at least 6 character."),
});
