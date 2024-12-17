import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  changeProductStatus,
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductDetails,
  productDuplicate,
  updateProduct,
} from "../services/Products";
import { TQuery } from "../services/Categories";
import { TProductStatus } from "../types";

export const useGetAllProducts = (query?: TQuery[]) => {
  // // console.log(query);
  return useQuery({
    queryKey: ["GET_ALL_PRODUCTS", query],
    queryFn: async () => await getAllProducts(query),
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCT", id],
    queryFn: async () => await getProductDetails(id),
    enabled: !!id, //? Ensures the query only runs when productId is defined
    staleTime: 5 * 60 * 1000, //? Optional: Cache data for 5 minutes
  });
};

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

export const useProductDuplicate = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    mutationKey: ["NEW_PRODUCT"],
    mutationFn: async (id) => await productDuplicate(id),
    onSuccess: () => {
      toast.success("Successfully duplicated product.");
      queryClient.invalidateQueries({
        queryKey: ["GET_MY_INVENTORY"],
        exact: true,
      });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: async (productData) => await updateProduct(productData),
    onSuccess: () => {
      toast.success("Successfully updated product.");
      queryClient.invalidateQueries({
        queryKey: ["GET_MY_INVENTORY"],
        exact: true,
      });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useChangeProductStatus = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { id: string; status: TProductStatus }>({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: async (productStatusData) =>
      await changeProductStatus(productStatusData),
    onSuccess: () => {
      toast.success("Successfully changed product status.");
      queryClient.invalidateQueries({
        queryKey: ["GET_MY_INVENTORY"],
        exact: true,
      });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>({
    // mutationKey: ["NEW_PRODUCT"],
    mutationFn: async (id) => await deleteProduct(id),
    onSuccess: () => {
      toast.success("Successfully deleted product.");
      queryClient.invalidateQueries({
        queryKey: ["GET_MY_INVENTORY"],
        exact: true,
      });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
