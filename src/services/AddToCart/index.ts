"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addToCart = async (args: FieldValues) => {
  const { id, ...payload } = args;

  try {
    const { data } = await axiosInstance.post(`/carts/${id}`, payload);

    return data;
  } catch (error: any) {
    console.log(error?.data?.message);
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
