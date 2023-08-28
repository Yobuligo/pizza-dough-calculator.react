import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { IConfigurationToggleButtonProps } from "./IConfigurationToggleButtonProps";
import { ConfigurationItem } from "../ConfigurationItem";

export const ConfigurationToggleButton: React.FC<
  IConfigurationToggleButtonProps
> = (props) => {
  const buildToggleButtons = () =>
    props.values.map((value) => (
      <ToggleButton value={value}>{value}</ToggleButton>
    ));

  return (
    <ConfigurationItem configuration={props.configuration}>
      <ToggleButtonGroup value={"Short"} exclusive onChange={() => {}}>
        {buildToggleButtons()}
      </ToggleButtonGroup>
    </ConfigurationItem>
  );
};
