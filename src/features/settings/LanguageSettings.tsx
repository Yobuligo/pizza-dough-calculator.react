import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageType } from "../../types/LanguageType";
import { findLanguages } from "../../utils/findLanguage";

export const LanguageSettings: React.FC = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useLanguage();

  const options = findLanguages().map((language) => (
    <option key={language.key} value={language.key}>
      {language.title}
    </option>
  ));

  const content = (
    <select
      name="language"
      id="language"
      value={(LanguageType as any)[language]}
      onChange={(event) => {
        console.log(`Language was changed to ${event.target.value}`);
        setLanguage((LanguageType as any)[event.target.value]);
        // setLanguage(event.target.value as LanguageType)
      }}
    >
      {options}
    </select>
  );
  return (
    <>
      {t.settings.language}: {content}
    </>
  );
};
