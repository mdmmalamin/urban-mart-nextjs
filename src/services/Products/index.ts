"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TQuery } from "../Categories";

export const getAllProducts = async (query?: TQuery[]) => {
  const params = new URLSearchParams();

  if (query) {
    query.forEach((item) => {
      params.append(item.name, item.value);
    });
  }
  console.log(params);
  try {
    const { data } = await axiosInstance.get(
      `/products?`,
      {
        params,
      }
      // `/products?${query?.map(item => (item.name = item.value))}`
    );

    console.log(data);

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
