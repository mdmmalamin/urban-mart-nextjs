"use server";

import { FieldValues } from "react-hook-form";

import { TQuery } from "../Categories";

import axiosInstance from "@/src/lib/AxiosInstance";
import { TProductStatus } from "@/src/types";

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
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const getProductDetails = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const createProduct = async (args: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/products`, args);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const productDuplicate = async (id: string) => {
  try {
    const { data } = await axiosInstance.post(`/products/${id}/duplicate`);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const updateProduct = async (args: FieldValues) => {
  const { id, ...payload } = args;

  try {
    const { data } = await axiosInstance.patch(`/products/${id}`, payload);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const changeProductStatus = async (args: {
  id: string;
  status: TProductStatus;
}) => {
  const { id, ...payload } = args;

  try {
    const { data } = await axiosInstance.patch(
      `/products/${id}/status`,
      payload
    );

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/products/${id}`);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};
