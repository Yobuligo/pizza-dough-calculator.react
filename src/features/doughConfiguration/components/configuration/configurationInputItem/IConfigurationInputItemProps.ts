import { Unit } from "../../../../ingredient/model/Unit";
import { IConfigurationProps } from "../IConfigurationProps";

export interface IConfigurationInputItemProps<T> extends IConfigurationProps {
  initialValue: T;
  onInputChange: (value: T) => void;
  unit?: Unit;
}
