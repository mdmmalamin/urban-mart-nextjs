"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export type TQuery = { name: string; value: string };

export const getCategories = async (query: TQuery) => {
  const { name, value } = query;

  try {
    const { data } = await axiosInstance.get(
      `/item-categories?${name}=${value}`
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong!");
  }
};
