"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TQuery } from "../Categories";

export const getAllShops = async (query?: TQuery[]) => {
  const params = new URLSearchParams();

  if (query) {
    query.forEach((item) => {
      params.append(item.name, item.value);
    });
  }
  console.log(params);
  try {
    const { data } = await axiosInstance.get(`/shops?`, {
      params,
    });

    console.log(data);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getShop = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/shops/${id}`);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
