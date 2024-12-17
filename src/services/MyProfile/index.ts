"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getMyProfile = async () => {
  try {
    const { data } = await axiosInstance.get("/users/my-profile");

    return data;
  } catch (error: any) {
    // // console.log(error);
    throw new Error(error?.data?.message);
  }
};
