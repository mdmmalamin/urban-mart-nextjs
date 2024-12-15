import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProduct,
  getAllProducts,
  getProductDetails,
} from "../services/Products";
import { TQuery } from "../services/Categories";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useGetAllProducts = (query?: TQuery[]) => {
  console.log(query);
  return useQuery({
    queryKey: ["GET_ALL_PRODUCTS", query],
    queryFn: async () => await getAllProducts(query),
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCTS"],
    queryFn: async () => await getProductDetails(id),
  });
};

// createProduct

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["NEW_PRODUCT"],
    mutationFn: async (productData) => await createProduct(productData),
    onSuccess: () => {
      toast.success("Successfully created product.");
      queryClient.invalidateQueries({
        queryKey: ["GET_MY_INVENTORY"],
        exact: true,
      });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
