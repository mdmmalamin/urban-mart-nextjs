"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export type TQuery = { name: string; value: string };

export const getCategories = async (query?: TQuery[]) => {
  // const { name, value } = query || {};

  try {
    const params = new URLSearchParams();

    if (query) {
      query.forEach((item) => {
        params.append(item.name, item.value);
      });
    }
    console.log(params);

    const { data } = await axiosInstance.get(`/categories?`, {
      params,
    });

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong!");
  }
};
