import { useQuery } from "@tanstack/react-query";
import { getMyInventories, getMyShop } from "../services/Vendor";

export const useGetMyShop = () => {
  return useQuery({
    queryKey: ["GET_MY_SHOP"],
    queryFn: async () => await getMyShop(),
  });
};

export const useGetMyInventories = () => {
  return useQuery({
    queryKey: ["GET_MY_INVENTORY"],
    queryFn: async () => await getMyInventories(),
  });
};
