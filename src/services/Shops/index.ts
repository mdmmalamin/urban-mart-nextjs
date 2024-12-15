"use server";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TQuery } from "../Categories";
import { FieldValues } from "react-hook-form";

export const getAllShops = async (query?: TQuery[]) => {
  const params = new URLSearchParams();

  if (query) {
    query.forEach((item) => {
      params.append(item.name, item.value);
    });
  }

  try {
    const { data } = await axiosInstance.get(`/shops?`, {
      params,
    });

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

export const createNewShop = async (newShopData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/shops`, newShopData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
