import { useTranslation } from "../../hooks/useTranslation";
import { findLanguages } from "../../utils/findLanguage";

export const LanguageSettings: React.FC = () => {
  const { t } = useTranslation();

  const options = findLanguages().map((language) => (
    <option value={language.key}>{language.title}</option>
  ));

  const content = (
    <select
      name="language"
      id="language"
      onChange={(event) => {
        console.log(`Language was changed to ${event.target.value}`);
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
