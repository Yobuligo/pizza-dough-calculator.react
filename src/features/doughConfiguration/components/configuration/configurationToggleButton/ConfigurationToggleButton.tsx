import { ToggleButton } from "../../../../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../../../../components/toggleButtonGroup/ToggleButtonGroup";
import { ConfigurationItem } from "../ConfigurationItem";
import { IConfigurationToggleButtonProps } from "./IConfigurationToggleButtonProps";
import styles from "./ConfigurationToggleButton.module.css";

export const ConfigurationToggleButton: React.FC<
  IConfigurationToggleButtonProps
> = (props) => {
  const buildToggleButtons = () =>
    props.values.map((value) => (
      <ToggleButton
        key={value}
        caption={value}
        className={styles.configurationToggleButton}
      />
    ));

  return (
    <ConfigurationItem configuration={props.configuration}>
      <ToggleButtonGroup>{buildToggleButtons()}</ToggleButtonGroup>
    </ConfigurationItem>
  );
};
