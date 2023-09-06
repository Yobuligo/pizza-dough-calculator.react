import { ConfigurationItem } from "../ConfigurationItem";
import styles from "./ConfigurationInputItem.module.css";
import { IConfigurationInputItemProps } from "./IConfigurationInputItemProps";

export function ConfigurationInputItem<T>(
  props: IConfigurationInputItemProps<T>
) {
  const getTypeByInitialValue = (value: T) => {
    switch (typeof value) {
      case "number":
      case "bigint": {
        return "number";
      }
      default:
        return "text";
    }
  };

  return (
    <ConfigurationItem
      configuration={props.configuration}
      className={`${styles.configurationItem} ${props.className}`}
    >
      {props.children}
      <input
        type={getTypeByInitialValue(props.initialValue)}
        onChange={(event) => {
          const newValue = parseFloat(event.target.value);
          if (newValue >= 0) {
            props.onInputChange(newValue as T);
          } else if (event.target.value === "") {
            props.onInputChange(0 as T);
          }
        }}
        className={styles.input}
        value={props.initialValue as string}
        disabled={props.disabled}
      />
      {props.unit && <div className={styles.unit}>{props.unit}</div>}
    </ConfigurationItem>
  );
}
