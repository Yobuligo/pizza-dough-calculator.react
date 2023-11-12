import { IToggleButtonProps } from "./../toggleButton/IToggleButtonProps";

export interface IToggleButtonGroupProps {
  children: React.ReactElement<IToggleButtonProps>[];
  disabled?: boolean;
  onSelected?: (index: number) => void;
  selected?: number;
  className?: string;
}
