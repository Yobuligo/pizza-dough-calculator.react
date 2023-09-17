import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import * as translations from "../i18n";
import { LanguageType } from "../types/LanguageType";
import { texts } from "../utils/translation/texts";

export const useTranslation = () => {
  const context = useContext(AppContext);

  const test = texts.settings.title;

  switch (context.language.value) {
    case LanguageType.DE: {
      return { t: translations["de"] };
    }

    case LanguageType.EN: {
      return { t: translations["en"] };
    }
    default:
      throw new Error(
        `Error while getting translations. Language '${context.language}' is not supported.`
      );
  }
};
