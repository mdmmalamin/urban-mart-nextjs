"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getMyProfile = async () => {
  try {
    const { data } = await axiosInstance.get("/users/my-profile");

    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message); // Rethrow to pass to `onError`
    }
  }
};
