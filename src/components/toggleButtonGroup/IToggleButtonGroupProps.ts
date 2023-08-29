import { IToggleButtonProps } from "./../toggleButton/IToggleButtonProps";

export interface IToggleButtonGroupProps {
  children: React.ReactElement<IToggleButtonProps>[];
  disabled?: boolean;
  selected?: number;
}
