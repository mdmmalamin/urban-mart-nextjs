import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  addToCart,
  changeMyCartItemQuantity,
  deletedMyCartItem,
  getMyCarts,
} from "../services/AddToCart";

type TCartItem = {
  id: string;
  quantity: number;
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, TCartItem>({
    mutationKey: ["ADD_TO_CART"],
    mutationFn: async (cartData) => await addToCart(cartData),
    onSuccess: () => {
      toast.success("Successfully product added to cart.");
      queryClient.invalidateQueries({ queryKey: ["CART_ITEMS"], exact: true });
    },
    onError: (error) => toast.error(error.message) || "Something went wrong!",
  });
};

export const useMyCarts = () => {
  return useQuery<any, Error>({
    queryKey: ["CART_ITEMS"],
    queryFn: async () => await getMyCarts(),
  });
};

export const useChangeMyCartItemQuantity = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, TCartItem>({
    mutationKey: ["ADD_TO_CART"],
    mutationFn: async (cartData) => await changeMyCartItemQuantity(cartData),
    onSuccess: () => {
      toast.success("Successfully quantity updated.");
      queryClient.invalidateQueries({ queryKey: ["CART_ITEMS"], exact: true });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useDeletedMyCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["ADD_TO_CART"],
    mutationFn: async (id) => await deletedMyCartItem(id),
    onSuccess: () => {
      toast.success("Successfully delete cart item.");
      queryClient.invalidateQueries({ queryKey: ["CART_ITEMS"], exact: true });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
