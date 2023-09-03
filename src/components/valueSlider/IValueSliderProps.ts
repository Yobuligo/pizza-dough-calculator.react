export interface IValueSliderProps {
  initialValue?: number;
  min: number;
  max: number;
  onChange?: (newValue: number) => void;
}
