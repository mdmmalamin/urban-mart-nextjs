"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import axiosInstance from "@/src/lib/AxiosInstance";

export const registerCustomer = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/users/create-customer",
      userData
    );

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);

      // localStorage.setItem("accessToken", data?.data?.accessToken);
      // localStorage.setItem("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const registerVendor = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/users/create-vendor", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);

      // localStorage.setItem("accessToken", data?.data?.accessToken);
      // localStorage.setItem("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data.data.accessToken);
      cookies().set("refreshToken", data.data.refreshToken);

      // if (typeof window !== "undefined") {
      //   localStorage.setItem("accessToken", data?.data?.accessToken);
      //   localStorage.setItem("refreshToken", data?.data?.refreshToken);
      // }
    }

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const forgetPassword = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/auth/forget-password",
      userData
    );

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const resetPassword = async (userData: FieldValues) => {
  const { resetToken, ...resetData } = userData;

  if (!resetToken) {
    throw new Error("Authorization token is missing.");
  }

  try {
    const { data } = await axiosInstance.post(
      "/auth/reset-password",
      resetData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${resetToken}`,
        },
      }
    );

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const changeEmail = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/change-email", userData);

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  // const accessToken = localStorage.getItem("accessToken");
  // // // console.log("accessToken: ", accessToken);

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return decodedToken;
  }

  //? Optional: Validate the token (e.g., check expiration)
  // const currentTime = Math.floor(Date.now() / 1000);
  // if (decodedToken.exp < currentTime) {
  //   // console.warn("Access token has expired.");
  //   return null;
  // }

  return decodedToken;
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
