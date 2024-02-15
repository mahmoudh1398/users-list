import { useQuery } from "@tanstack/react-query";
import { USERS_QUERY_KEY } from "enum/users-query-key.enum";
import { getUsers } from "queries/users";

export const useUsers = () => {
  return useQuery({
    queryKey: [USERS_QUERY_KEY.users],
    queryFn: getUsers,
  });
};
