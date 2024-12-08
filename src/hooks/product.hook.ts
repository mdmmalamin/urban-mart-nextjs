import { useQuery } from "@tanstack/react-query";
import { getAllProducts, getProductDetails } from "../services/Products";
import { TQuery } from "../services/Categories";

export const useGetAllProducts = (query?: TQuery[]) => {
  return useQuery({
    queryKey: ["GET_ALL_PRODUCTS"],
    queryFn: async () => await getAllProducts(query),
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCTS"],
    queryFn: async () => await getProductDetails(id),
  });
};
