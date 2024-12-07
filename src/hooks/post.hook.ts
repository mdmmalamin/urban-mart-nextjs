import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/Post";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    // onMutate: () => toast.loading("User creating..."),
    onSuccess: () => toast.success("Post created successfully."),
    onError: (error) => toast.error(error?.message) || "Something went wrong!",
  });
};
