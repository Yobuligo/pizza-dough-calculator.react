import { ConfigurationItem } from "../ConfigurationItem";
import { IConfigurationInputItemProps } from "./IConfigurationInputItemProps";

export const ConfigurationInputItem: React.FC<IConfigurationInputItemProps> = (
  props
) => {
  return (
    <ConfigurationItem configuration={props.configuration}>
      {/* <input onChange={props.} /> */}
    </ConfigurationItem>
  );
};
