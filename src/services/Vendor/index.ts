"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getMyShop = async () => {
  try {
    const { data } = await axiosInstance.get("/shops/my-shop");

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getMyInventories = async () => {
  try {
    const { data } = await axiosInstance.get("/inventories/my-inventories");

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
