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

export const updateUser = async ({
  id,
  payload,
}: {
  id: number;
  payload: Partial<UserEntityModel>;
}) => {
  const res = await userServiceInstance.updateUser(id, payload);
  return res.data;
};

export const deleteUser = async (id: number) => {
  const res = await userServiceInstance.deleteUser(id);
  return res.data;
};
