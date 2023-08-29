import { IToggleButtonProps } from "./../toggleButton/IToggleButtonProps";

export interface IToggleButtonGroupProps {
  children: React.ReactElement<IToggleButtonProps>[];
  selected?: number;
}
