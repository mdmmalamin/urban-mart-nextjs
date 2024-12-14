"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TUser } from "@/src/types/profile.type";

export const getMyShop = async () => {
  try {
    const { data } = await axiosInstance.get("/shops/my-shop");
    console.log("my shop", data);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.data.message);
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

export const updateMyProfile = async (args: Partial<TUser>) => {
  try {
    const { data } = await axiosInstance.patch("/vendors/profile", args);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.data.message);
  }
};
