"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TUser } from "@/src/types/profile.type";

export const getMyShop = async () => {
  try {
    const { data } = await axiosInstance.get("/shops/my-shop");

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const getMyInventories = async () => {
  try {
    const { data } = await axiosInstance.get("/inventories/my-inventories");

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const updateMyProfile = async (args: Partial<TUser>) => {
  try {
    const { data } = await axiosInstance.patch("/vendors/profile", args);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};
