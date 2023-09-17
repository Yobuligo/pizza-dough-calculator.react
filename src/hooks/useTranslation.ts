import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import * as translations from "../i18n";
import { LanguageType } from "../types/LanguageType";

export const useTranslation = () => {
  const context = useContext(AppContext);
  switch (context.language.value) {
    case LanguageType.DE: {
      const t = translations["de"];
      return { t: translations["de"] };
    }

    case LanguageType.EN: {
      const t = translations["en"];
      return { t: translations["en"] };
    }
    default:
      throw new Error(
        `Error while getting translations. Language '${context.language}' is not supported.`
      );
  }
};
