import { ICalculator } from "./ICalculator";
import { IParameter } from "./calculator/IParameter";
import { IResult } from "./calculator/IResult";
import { IParameterWithPreDough } from "./calculatorWithPreDough/IParameterWithPreDough";
import { IResultWithPreDough } from "./calculatorWithPreDough/IResultWithPreDough";

export interface ICalculatorFactory {
  create(): ICalculator<IParameter, IResult>;
  createWithPreDough(): ICalculator<
    IParameterWithPreDough,
    IResultWithPreDough
  >;
}
