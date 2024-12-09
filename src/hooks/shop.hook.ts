import { useQuery } from "@tanstack/react-query";
import { getAllShops, getShop } from "../services/Shops";
import { TQuery } from "../services/Categories";

export const useGetAllShops = (query?: TQuery[]) => {
  return useQuery({
    queryKey: ["GET_ALL_SHOPS"],
    queryFn: async () => await getAllShops(query),
  });
};

export const useGetShop = (id: string) => {
  return useQuery({
    queryKey: ["GET_SHOP"],
    queryFn: async () => await getShop(id),
  });
};
