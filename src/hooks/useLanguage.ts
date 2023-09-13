import { LanguageType } from "../types/LanguageType";
import { useLocalStorage } from "./useLocalStorage";

export const useLanguage = (): [
  language: LanguageType,
  setLanguage: (newLanguage: LanguageType) => void
] => {
  const [language, setLanguage] = useLocalStorage("language", LanguageType.DE);
  return [language, setLanguage];
};
