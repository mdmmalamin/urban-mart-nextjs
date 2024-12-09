import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addToCart, getMyCarts } from "../services/AddToCart";
import { toast } from "sonner";

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
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useMyCarts = () => {
  return useQuery<any, Error>({
    queryKey: ["CART_ITEMS"],
    queryFn: async () => await getMyCarts(),
  });
};
