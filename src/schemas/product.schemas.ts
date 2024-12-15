import { z } from "zod";

export const publishedProductValidationSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required!.",
    })
    .min(5, "Please enter your product name. Min 5 characters!"),
  description: z
    .string({
      required_error: "Description is required!.",
    })
    .optional(),
  // categoryId: z.string({
  //   required_error: "Category is required!",
  // }),
  // status: z.enum(["DRAFTED", "PUBLISHED"], {
  //   required_error: "Status is required!",
  // }),
  price: z
    .string()
    .regex(
      /^\d+(\.\d{1,2})?$/,
      "Price must be a valid number with up to 2 decimal places."
    ),
    // .transform((value) => parseFloat(value)), //? Converts to number,
  quantity: z
    .string()
    .regex(/^\d+$/, "Quantity must be a valid integer.")
    // .transform((value) => parseInt(value, 10)), //? Converts to number
});

export const draftedProductValidationSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required!.",
    })
    .min(5, "Please enter your product name. Min 5 characters!"),
  // description: z
  //   .string({
  //     required_error: "Description is required!.",
  //   })
  //   .optional(),
  categoryId: z.string({
    required_error: "Category is required!",
  }),
  // status: z
  //   .enum(["DRAFTED", "PUBLISHED"], {
  //     required_error: "Status is required!",
  //   })
  //   .optional(),
  // price: z
  //   .string()
  //   .regex(
  //     /^\d+(\.\d{1,2})?$/,
  //     "Price must be a valid number with up to 2 decimal places."
  //   )
  //   .transform((value) => parseFloat(value))
  //   .optional(), //? Converts to number,
  // quantity: z
  //   .string()
  //   .regex(/^\d+$/, "Quantity must be a valid integer.")
  //   .transform((value) => parseInt(value, 10))
  //   .optional(), //? Converts to number
});
