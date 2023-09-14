import { IValue } from "../types/IValue";
import { LanguageType } from "../types/LanguageType";
import { useLocalStorage } from "./useLocalStorage";

export const useLanguage = (): IValue<LanguageType> => {
  const [language, setLanguage] = useLocalStorage("language", LanguageType.DE);
  return { value: language, setValue: setLanguage };
};
