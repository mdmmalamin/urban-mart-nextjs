"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TQuery } from "../Categories";

export const getAllProducts = async (query?: TQuery[]) => {
  const params = new URLSearchParams();

  if (query) {
    query.forEach((item) => {
      if (item.name && item.value) {
        params.append(item.name, item.value);
      }
    });
  }

  try {
    const { data } = await axiosInstance.get(`/products?`, {
      params,
    });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductDetails = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
