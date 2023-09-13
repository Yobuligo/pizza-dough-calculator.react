import { LanguageSettings } from "./LanguageSettings";
import styles from "./Settings.module.css";

export const Settings: React.FC = () => {
  return (
    <div className={styles.settings}>
      <LanguageSettings />
    </div>
  );
};
