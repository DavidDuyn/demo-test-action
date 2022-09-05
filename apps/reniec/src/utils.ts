export const getKeyByValue = (value: string, enumeration: any): string => {
  const indexOfValue = Object.values(enumeration).indexOf(value);
  console.log(1);
  return Object.keys(enumeration)[indexOfValue];
};
