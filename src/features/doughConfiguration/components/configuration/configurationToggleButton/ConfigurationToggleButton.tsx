import { ToggleButton } from "../../../../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../../../../components/toggleButtonGroup/ToggleButtonGroup";
import { ConfigurationItem } from "../ConfigurationItem";
import styles from "./ConfigurationToggleButton.module.css";
import { IConfigurationToggleButtonProps } from "./IConfigurationToggleButtonProps";

export const ConfigurationToggleButton: React.FC<
  IConfigurationToggleButtonProps
> = (props) => {
  const buildToggleButtons = () =>
    props.values.map((value, index) => (
      <ToggleButton
        key={index}
        caption={value}
        className={styles.configurationToggleButton}
        onClick={() => props.onChange?.(index)}
      />
    ));

  return (
    <ConfigurationItem configuration={props.configuration}>
      <ToggleButtonGroup selected={props.selected}>
        {buildToggleButtons()}
      </ToggleButtonGroup>
    </ConfigurationItem>
  );
};
