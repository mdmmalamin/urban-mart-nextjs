"use server";

import { TQuery } from "../Categories";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getMyInventory = async (query?: TQuery[]) => {
  const params = new URLSearchParams();

  if (query) {
    query.forEach((item) => {
      if (item.name && item.value) {
        params.append(item.name, item.value);
      }
    });
  }
  try {
    const { data } = await axiosInstance.get(`inventories/my-inventories`, {
      params,
    });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
