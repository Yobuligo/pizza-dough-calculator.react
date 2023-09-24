import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NotSupportedError } from "../errors/NotSupportedError";
import * as translations from "../i18n";
import { LanguageType } from "../types/LanguageType";

export const useTranslation = () => {
  const context = useContext(AppContext);

  const language = () => {
    switch (context.language.value) {
      case LanguageType.DE: {
        return "de";
      }
      case LanguageType.EN: {
        return "en";
      }
      default:
        throw new NotSupportedError(
          `Error while getting translations. Language '${context.language}' is not supported.`
        );
    }
  };

  const getTranslations = (keys: string[]) => {
    const result = keys.reduce((obj, key) => {
      return obj[key];
    }, (translations as any)[language()]);
    return result;
  };

  const t = (key: string) => {
    const keySegments = key.split(".");
    return getTranslations(keySegments);
  };

  return { t };
};
