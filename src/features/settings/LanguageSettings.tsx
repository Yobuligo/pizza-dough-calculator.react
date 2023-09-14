import { useLanguage } from "../../hooks/useLanguage";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageType } from "../../types/LanguageType";
import { findLanguages } from "../../utils/findLanguage";

export const LanguageSettings: React.FC = () => {
  const { t } = useTranslation();
  const language = useLanguage();

  const options = findLanguages().map((item) => (
    <option
      key={item.key}
      selected={item.title === language.value}
      value={item.key}
    >
      {item.title}
    </option>
  ));

  const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    language.setValue((LanguageType as any)[event.target.value]);
  };

  const content = (
    <select name="language" id="language" onChange={onChangeLanguage}>
      {options}
    </select>
  );
  return (
    <>
      {t.settings.language}: {content}
    </>
  );
};
