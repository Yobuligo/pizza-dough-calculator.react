import { LanguageType } from "../types/LanguageType";
import { useLocalStorage } from "./useLocalStorage";

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorage("language", LanguageType.DE);
  return [language, setLanguage];
};
