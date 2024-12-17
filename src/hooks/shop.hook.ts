import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { createNewShop, getAllShops, getShop } from "../services/Shops";
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

//
export const useCreateNewShop = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["MY_SHOP"],
    mutationFn: async (newShopData) => await createNewShop(newShopData),
    onSuccess: () => {
      toast.success("Successfully created your new shop.");
      queryClient.invalidateQueries({ queryKey: ["MY_SHOP"], exact: true });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
