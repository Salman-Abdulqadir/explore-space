import lodash from "lodash";

export const convertArrayToSelectValues = (items: string[]) => {
  return items.map((item) => ({ label: lodash.capitalize(item), value: item }));
};
