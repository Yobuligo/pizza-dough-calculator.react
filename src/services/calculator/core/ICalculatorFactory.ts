import { IParameter } from "../calculatorWithoutPreDough/IParameter";
import { IResultWithoutPreDough } from "../calculatorWithoutPreDough/IResultWithoutPreDough";
import { IParameterWithPreDough } from "../calculatorWithPreDough/IParameterWithPreDough";
import { IResultWithPreDough } from "../calculatorWithPreDough/IResultWithPreDough";
import { ICalculator } from "./ICalculator";

export interface ICalculatorFactory {
  create(): ICalculator<IParameter, IResultWithoutPreDough>;
  createWithPreDough(): ICalculator<
    IParameterWithPreDough,
    IResultWithPreDough
  >;
}
