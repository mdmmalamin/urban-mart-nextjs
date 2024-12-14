export const protectedRouts = [
  "/user",
  "/user/:page*",
  "/vendor",
  "/vendor/:page*",
  "/admin",
  "/admin/:page*",
  "/login",
  "/register",
  "/cart",
  "/shipping",
];

export const NO_IMAGE_FOUND =
  "https://res.cloudinary.com/dgxlbj77m/image/upload/v1733428405/urban-mart/product/no-product-image.jpg";

export const PriceRangeOptions = [
  { min: 0, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000, max: 5000 },
  { min: 5000, max: 10000 },
  { min: 10000, max: 99999999 },
];
