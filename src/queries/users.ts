import { UserEntityModel } from "model/entity/user.model";
import { userServiceInstance } from "services/user.service";

export const getUsers = async () => {
  const res = await userServiceInstance.getUsers();
  return res.data;
};

export const createUser = async (payload: Partial<UserEntityModel>) => {
  const res = await userServiceInstance.createUser(payload);
  return res.data;
};
