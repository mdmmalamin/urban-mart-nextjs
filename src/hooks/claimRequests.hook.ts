import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { addClaimRequest } from "../services/ClaimRequests";
import { FieldValues } from "react-hook-form";

export const useAddClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addClaimRequest(postData),
    // onMutate: () => toast.loading("User creating..."),
    onSuccess: () => toast.success("Request successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
