import { useQuery } from "@tanstack/react-query";
import { userServiceInstance } from "services/user.service";

const getUsers = async () => {
  const res = await userServiceInstance.getUsers();
  return res.data;
};

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
