import { ValueSlider } from "../../../../../components/valueSlider/ValueSlider";
import { useModalDialog } from "../../../../../hooks/useModalDialog";
import { ConfigurationItem } from "../ConfigurationItem";
import styles from "./ConfigurationInputItem.module.css";
import { IConfigurationInputItemProps } from "./IConfigurationInputItemProps";

export function ConfigurationInputItem<T>(
  props: IConfigurationInputItemProps<T>
) {
  const modalDialog = useModalDialog();
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
        onChange={(event) => props.onInputChange(event.target.value as T)}
        className={styles.input}
        value={props.initialValue as string}
        disabled={props.disabled}
        onClick={() => {
          modalDialog.show({
            component: (
              <ValueSlider
                initialValue={props.initialValue as number}
                interval={props.interval}
                max={props.max}
                min={props.min}
                unit={props.unit}
              />
            ),
            title: props.configuration.name,
            width: "80%",
          });
        }}
      />
      {props.unit && <div className={styles.unit}>{props.unit}</div>}
    </ConfigurationItem>
  );
}
