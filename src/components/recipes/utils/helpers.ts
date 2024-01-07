export const convertArrayToSelectValues = (items: string[]) => {
  return items.map((item) => ({ label: item, value: item }));
};

export const formatFilterValues = (values: any[], keyToExtract: string) => {
  return values.map((value) => value[keyToExtract]);
};
