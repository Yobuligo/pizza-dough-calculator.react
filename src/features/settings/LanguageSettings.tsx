import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageType } from "../../types/LanguageType";
import { findLanguages } from "../../utils/findLanguage";
import { isNotNull } from "../../utils/isNotNull";

export const LanguageSettings: React.FC = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();

  const options = findLanguages().map((item) => (
    <option
      key={item.key}
      selected={item.title === context.language.value}
      value={item.key}
    >
      {item.title}
    </option>
  ));

  const onChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    isNotNull(event.target.value, (value) =>
      context.language.setValue((LanguageType as any)[value])
    );
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
