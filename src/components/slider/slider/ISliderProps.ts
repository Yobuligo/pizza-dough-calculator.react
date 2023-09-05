export interface ISliderProps {
  max: number;
  min: number;
  onChange?: (newValue: number) => void;
  value?: number
}
