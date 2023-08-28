import { useTranslation } from "../../hooks/useTranslation";
import styles from "./DoughtConfigurationList.module.css";
import { PreDoughConfiguration } from "./preDoughConfiguration/PreDoughConfiguration";

export const DoughConfigurationList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.doughConfigurationList}>
      <fieldset>
        <legend>{t.parameters.title}</legend>
        <PreDoughConfiguration />
      </fieldset>
    </div>
  );
};
