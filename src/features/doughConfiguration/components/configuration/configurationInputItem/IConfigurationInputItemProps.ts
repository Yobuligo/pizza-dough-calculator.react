import { IConfigurationProps } from "../IConfigurationProps";

export interface IConfigurationInputItemProps<T> extends IConfigurationProps {
  initialValue: T;
  onInputChange: (value: T) => void;
}
