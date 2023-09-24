import { NotSupportedError } from "../errors/NotSupportedError";
import { ILanguage } from "../types/ILanguage";
import { LanguageType } from "../types/LanguageType";

class LanguageDefault {
  findLanguages(): ILanguage[] {
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
  }

  getIndexOfLanguageType(languageType: LanguageType): number {
    const keys = Object.keys(LanguageType);
    for (let i = 0; i < keys.length; i++) {
      if ((LanguageType as any)[keys[i]] === languageType) {
        return i;
      }
    }

    throw new NotSupportedError(
      `Error while getting index of language type. Language type '${languageType}' is no valid language type value.`
    );
  }
}

export const Language = new LanguageDefault();
