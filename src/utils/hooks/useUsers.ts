import { useQuery } from "@tanstack/react-query";
import { getUsers } from "queries/users";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
};
