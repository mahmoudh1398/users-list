import {
  UserEntityModel,
  UserInTableEntityModel,
} from "model/entity/user.model";

export const convertToTableData = (data: UserEntityModel[]) => {
  const finalData: UserInTableEntityModel[] = [];
  for (const item of data) {
    finalData.push({ ...item, key: item.id });
  }
  return finalData;
};
