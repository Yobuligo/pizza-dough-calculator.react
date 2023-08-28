import { IParameterWithoutPreDough } from "../calculatorWithoutPreDough/IParameterWithoutPreDough";

export interface IParameterWithPreDough extends IParameterWithoutPreDough {
  amountPreDough: number;
}
