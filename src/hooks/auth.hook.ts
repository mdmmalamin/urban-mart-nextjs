import { useMutation } from "@tanstack/react-query";
import {
  loginUser,
  registerCustomer,
  registerVendor,
} from "../services/AuthServices";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCustomerRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REG"],
    mutationFn: async (userData) => await registerCustomer(userData),
    // onMutate: () => toast.loading("User creating..."),
    onSuccess: () => toast.success("Your account registration successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useVendorRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REG"],
    mutationFn: async (userData) => await registerVendor(userData),
    // onMutate: () => toast.loading("User creating..."),
    onSuccess: () =>
      toast.success("Your vendor account registration successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    // onMutate: () => toast.loading("User creating..."),
    onSuccess: () => toast.success("User login successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
