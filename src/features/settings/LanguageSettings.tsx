import { useContext } from "react";
import { ToggleButton } from "../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../components/toggleButtonGroup/ToggleButtonGroup";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { texts } from "../../i18n/texts";
import { LanguageType } from "../../types/LanguageType";
import { Language } from "../../utils/Language";
import styles from "./LanguageSettings.module.css";

export const LanguageSettings: React.FC = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation();

  const toggleButtons = Language.findLanguages().map((item) => (
    <ToggleButton
      key={item.key}
      caption={item.title}
      onClick={() => context.language.setValue(item.title as LanguageType)}
    />
  ));

  return (
    <div className={styles.text}>
      <div>{t(texts.settings.language)}</div>
      <div>
        <ToggleButtonGroup
          selected={Language.getIndexOfLanguageType(context.language.value)}
        >
          {toggleButtons}
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
