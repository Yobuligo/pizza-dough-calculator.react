import { ConfigurationItem } from "../ConfigurationItem";
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
    <ConfigurationItem configuration={props.configuration}>
      <input
        type={getTypeByInitialValue(props.initialValue)}
        onChange={(event) => props.onInputChange(event.target.value as T)}
      />
    </ConfigurationItem>
  );
}
