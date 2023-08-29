import { IConfigurationProps } from "../IConfigurationProps";

export interface IConfigurationToggleButtonProps extends IConfigurationProps {
  onChange?: (index: number) => void;
  selected?: number;
  values: string[];
}
