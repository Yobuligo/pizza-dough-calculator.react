import styles from "./DoughtConfigurationList.module.css";
import { PreDoughConfiguration } from "./preDoughConfiguration/PreDoughConfiguration";

export const DoughConfigurationList: React.FC = () => {
  return (
    <div className={styles.doughConfigurationList}>
      <fieldset>
        <legend>Configure your dough</legend>
        <PreDoughConfiguration />
      </fieldset>
    </div>
  );
};
