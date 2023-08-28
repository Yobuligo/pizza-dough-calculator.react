import { IParameter } from "../calculatorWithoutPreDough/IParameter";

export interface IParameterWithPreDough extends IParameter {
  amountPreDough: number;
}
