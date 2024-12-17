import { useQuery } from "@tanstack/react-query";

import { getCategories, TQuery } from "../services/Categories";

export const useCategories = (query?: TQuery[]) => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async () => await getCategories(query),
  });
};
