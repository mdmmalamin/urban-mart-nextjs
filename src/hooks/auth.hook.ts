import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  changeEmail,
  forgetPassword,
  loginUser,
  registerCustomer,
  registerVendor,
  resetPassword,
} from "../services/AuthServices";

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

export const useForgetPassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_FORGET_PASSWORD"],
    mutationFn: async (userData) => await forgetPassword(userData),
    onSuccess: () => toast.success("Send verification email successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useResetPassword = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_RESET_PASSWORD"],
    mutationFn: async (userData) => await resetPassword(userData),
    onSuccess: () =>
      toast.success("Your password reset successfully. Please login..."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};

export const useChangeEmail = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_EMAIL_CHANGE"],
    mutationFn: async (userData) => await changeEmail(userData),
    onSuccess: () => toast.success("Your email changed successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
