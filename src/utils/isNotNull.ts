export const isNotNull = <T>(
  value: T,
  block: (value: NonNullable<T>) => void
) => {
  if (value !== undefined && value !== null) {
    block(value);
  }
};
