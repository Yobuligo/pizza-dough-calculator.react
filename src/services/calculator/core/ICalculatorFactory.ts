import { IParameterWithoutPreDough } from "../calculatorWithoutPreDough/IParameterWithoutPreDough";
import { IResultWithoutPreDough } from "../calculatorWithoutPreDough/IResultWithoutPreDough";
import { IParameterWithPreDough } from "../calculatorWithPreDough/IParameterWithPreDough";
import { IResultWithPreDough } from "../calculatorWithPreDough/IResultWithPreDough";
import { ICalculator } from "./ICalculator";

export interface ICalculatorFactory {
  create(): ICalculator<IParameterWithoutPreDough, IResultWithoutPreDough>;
  createWithPreDough(): ICalculator<
    IParameterWithPreDough,
    IResultWithPreDough
  >;
}
