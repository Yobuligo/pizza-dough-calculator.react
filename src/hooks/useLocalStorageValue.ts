import { IValue } from "../types/IValue";
import { useLocalStorage } from "./useLocalStorage";

export const useLocalStorageValue = <T>(
  key: string,
  fallbackValue: T
): IValue<T> => {
  const [value, setValue] = useLocalStorage(key, fallbackValue);
  return { value, setValue };
};
