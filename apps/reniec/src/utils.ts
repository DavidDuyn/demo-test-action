export const getKeyByValue = (value: string, enumeration: any): string => {
  const indexOfValue = Object.values(enumeration).indexOf(value);
  return Object.keys(enumeration)[indexOfValue];
};
