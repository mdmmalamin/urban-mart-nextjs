"use server";

import envConfig from "@/src/config/envConfig";

export const getProducts = async () => {
  try {
    const fetchOptions = {
      next: {
        tags: ["PRODUCTS"],
      },
    };
    const res = await fetch(
      `${envConfig.baseApi}/products?page=1&limit=10&status=PUBLISHED`,
      fetchOptions
    );

    return await res.json();
  } catch (error: any) {
    throw new Error(error.message);
  }
};
