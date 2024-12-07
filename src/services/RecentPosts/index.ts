import envConfig from "@/src/config/envConfig";
export const getProducts = async () => {
  const fetchOptions = {
    next: {
      tags: ["PRODUCTS"],
    },
  };
  const res = await fetch(`${envConfig.baseApi}/products?page=1&limit=10&status=PUBLISHED`, fetchOptions);

  return await res.json();
};
