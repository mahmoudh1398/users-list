import { UserEntityModel } from "model/entity/user.model";
import { SearchSelectOptionModel } from "model/etc/search-select-option.model";

export const convertToSearchSelectOptions = (data: UserEntityModel[]) => {
  const finalData: SearchSelectOptionModel[] = [];
  for (const item of data) {
    finalData.push({ label: item.name, value: item.name });
  }
  return finalData;
};
