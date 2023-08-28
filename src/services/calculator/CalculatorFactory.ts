import { IParameterWithPreDough } from "./calculatorWithPreDough/IParameterWithPreDough";
import { IResultWithPreDough } from "./calculatorWithPreDough/IResultWithPreDough";
import { IParameter } from "./calculatorWithoutPreDough/IParameter";
import { IResultWithoutPreDough } from "./calculatorWithoutPreDough/IResultWithoutPreDough";
import { ICalculator } from "./core/ICalculator";
import { ICalculatorFactory } from "./core/ICalculatorFactory";

export class CalculatorFactory implements ICalculatorFactory {
  create(): ICalculator<IParameter, IResultWithoutPreDough> {
    throw new Error("Method not implemented.");
  }
  
  createWithPreDough(): ICalculator<
    IParameterWithPreDough,
    IResultWithPreDough
  > {
    throw new Error("Method not implemented.");
  }
}
