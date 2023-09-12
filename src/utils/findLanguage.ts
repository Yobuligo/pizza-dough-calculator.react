import { ILanguage } from "../types/ILanguage";
import { LanguageType } from "../types/LanguageType";

export const findLanguages = (): ILanguage[] => {
  const languages: ILanguage[] = [];

  const keys = Object.keys(LanguageType);
  for (const key of keys) {
    const title = (LanguageType as any)[key];
    const language: ILanguage = {
      key: key,
      title: title,
    };
    languages.push(language);
  }

  return languages;
};
