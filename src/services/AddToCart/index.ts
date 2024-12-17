"use server";

import { FieldValues } from "react-hook-form";

import axiosInstance from "@/src/lib/AxiosInstance";

export const addToCart = async (args: FieldValues) => {
  const { id, ...payload } = args;

  try {
    const { data } = await axiosInstance.post(`/carts/${id}`, payload);

    return data;
  } catch (error: any) {
    // // console.log(error);
    throw new Error(error?.data?.message);
  }
};

export const getMyCarts = async () => {
  try {
    const { data } = await axiosInstance.get(`/carts/my-carts`);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const changeMyCartItemQuantity = async (args: any) => {
  const { id, quantity } = args;

  try {
    const { data } = await axiosInstance.patch(`/carts/${id}`, { quantity });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletedMyCartItem = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/carts/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
