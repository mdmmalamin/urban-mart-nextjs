import { z } from "zod";

export const registerCustomerValidationSchema = z.object({
  // fullName: z
  //   .string({
  //     required_error: "Please enter a valid name.",
  //   })
  //   .min(3, "Please enter your name!"),
  email: z.string().trim().toLowerCase().email("Please enter a valid email!"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid mobile number!"),
  password: z.string().min(6, "Password at least 6 character!"),
});

export const registerVendorValidationSchema = z.object({
  fullName: z
    .string({
      required_error: "Please enter a valid name.",
    })
    .min(3, "Please enter your name!"),
  dateOfBirth: z.object({
    day: z.number().min(1).max(31),
    month: z.number().min(1).max(12),
    year: z.number().min(1900).max(new Date().getFullYear()),
  }),
  gender: z.enum(["MALE", "FEMALE"], {
    required_error: "Gender is required!",
  }),
  email: z.string().trim().toLowerCase().email("Please enter a valid email!"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid mobile number!"),
  password: z.string().min(6, "Password at least 6 character!"),
});
