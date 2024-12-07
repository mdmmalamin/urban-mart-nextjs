import { z } from "zod";

export const registerValidationSchema = z.object({
  name: z
    .string({
      required_error: "Please enter a valid name.",
    })
    .min(3, "Please enter your name!"),
  email: z.string().trim().toLowerCase().email("Please enter a valid email!"),
  mobileNumber: z
    .string()
    .regex(/^\d{11}$/, "Please enter a valid mobile number!"),
  password: z.string().min(6, "Password at least 6 character!"),
});
