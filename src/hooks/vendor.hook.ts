import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMyInventories,
  getMyShop,
  updateMyProfile,
} from "../services/Vendor";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useGetMyShop = () => {
  return useQuery({
    queryKey: ["GET_MY_SHOP"],
    queryFn: async () => await getMyShop(),
  });
};

export const useGetMyInventories = () => {
  return useQuery({
    queryKey: ["GET_MY_INVENTORY"],
    queryFn: async () => await getMyInventories(),
  });
};

// updateMyProfile
export const useUpdateMyProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["MY_PROFILE"],
    mutationFn: async (profileData) => await updateMyProfile(profileData),
    onSuccess: () => {
      toast.success("Successfully profile updated.");
      queryClient.invalidateQueries({ queryKey: ["MY_PROFILE"], exact: true });
    },
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
