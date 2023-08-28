import { YeastType } from "../../../types/YeastType";
import { IYeastCalculator } from "./IYeastCalculator";

export interface IYeastCalculatorFactory {
  create(yeastType: YeastType): IYeastCalculator;
}
