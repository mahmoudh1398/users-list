import { UserEntityModel } from "model/entity/user.model";

export const filterDataByName = (data: UserEntityModel[], name: string) => {
  const filteredData = data.filter((item) => item.name === name);
  return filteredData;
};
