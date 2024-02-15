import { UserEntityModel } from "model/entity/user.model";

export const filterDataByAnyProperty = (
  data: UserEntityModel[],
  term: string
) => {
  let finalData: UserEntityModel[] = [];

  for (let i = 0; i < 10; i++) {
    const tr = data[i];
    if (
      tr.name.includes(term) ||
      tr.username.includes(term) ||
      tr.email.includes(term) ||
      tr.address.street.includes(term) ||
      tr.address.suite.includes(term) ||
      tr.address.city.includes(term) ||
      tr.address.zipcode.includes(term) ||
      tr.address.geo.lat.includes(term) ||
      tr.address.geo.lng.includes(term) ||
      tr.phone.includes(term) ||
      tr.website.includes(term) ||
      tr.company.name.includes(term) ||
      tr.company.catchPhrase.includes(term) ||
      tr.company.bs.includes(term)
    ) {
      finalData.push(tr);
    }
  }

  return finalData;
};
