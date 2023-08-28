import styles from "./ConfigurationItem.module.css";
import { IConfigurationProps } from "./IConfigurationProps";

export const ConfigurationItem: React.FC<IConfigurationProps> = (props) => {
  return (
    <div className={styles.configurationItem}>
      <label htmlFor={props.configuration.name}>
        {props.configuration.name}
      </label>
      <div className={styles.configurationChangeElement}>{props.children}</div>
    </div>
  );
};
