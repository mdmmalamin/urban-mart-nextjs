// getMyInventory

import { useQuery } from "@tanstack/react-query";

import { TQuery } from "../services/Categories";
import { getMyInventory } from "../services/Inventories";

export const useGetMyInventory = (query?: TQuery[]) => {
  return useQuery({
    queryKey: ["GET_MY_INVENTORY"],
    queryFn: async () => await getMyInventory(query),
  });
};
