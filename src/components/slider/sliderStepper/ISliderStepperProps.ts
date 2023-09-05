import { ISliderProps } from "../slider/ISliderProps";

export interface ISliderStepperProps extends ISliderProps {
  initialValue?: number;

  /**
   * Defines an interval for the slider. The values are increased or decreased by that interval.
   * E.g. increase value by 0.1 instead of 1
   */
  interval?: number;  
}
