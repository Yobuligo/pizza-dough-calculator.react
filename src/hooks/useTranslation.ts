import * as translations from "../i18n";
import { LanguageType } from "../types/LanguageType";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const language = useLanguage();
  switch (language.value) {
    case LanguageType.DE:
      return { t: translations["de"] };

    case LanguageType.EN:
      return { t: translations["en"] };
    default:
      throw new Error(
        `Error while getting translations. Language '${language}' is not supported.`
      );
  }
};
