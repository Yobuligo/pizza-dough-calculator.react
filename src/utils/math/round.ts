export const round = (value: number, decimalPlaces: number): number => {
  if (decimalPlaces === 0) {
    return value;
  }
  const product = value * (10 * decimalPlaces);
  const rounded = Math.round(product);
  const result = rounded / (10 * decimalPlaces);
  return result;
};
