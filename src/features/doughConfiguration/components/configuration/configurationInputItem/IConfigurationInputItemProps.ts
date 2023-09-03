import { Unit } from "../../../../ingredient/model/Unit";
import { IConfigurationProps } from "../IConfigurationProps";

export interface IConfigurationInputItemProps<T> extends IConfigurationProps {
  className?: string;
  disabled?: boolean;
  initialValue: T;
  interval?: number;
  max: number;
  min: number;
  onInputChange: (value: T) => void;
  unit?: Unit;
}
