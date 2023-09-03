export interface IValueSliderProps {
  initialValue?: number;
  interval?: number;
  min: number;
  max: number;
  onChange?: (newValue: number) => void;
}
