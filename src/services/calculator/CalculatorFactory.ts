import { IParameterWithPreDough } from "./calculatorWithPreDough/IParameterWithPreDough";
import { IResultWithPreDough } from "./calculatorWithPreDough/IResultWithPreDough";
import { IParameterWithoutPreDough } from "./calculatorWithoutPreDough/IParameterWithoutPreDough";
import { IResultWithoutPreDough } from "./calculatorWithoutPreDough/IResultWithoutPreDough";
import { ICalculator } from "./core/ICalculator";
import { ICalculatorFactory } from "./core/ICalculatorFactory";

export class CalculatorFactory implements ICalculatorFactory {
  create(): ICalculator<IParameterWithoutPreDough, IResultWithoutPreDough> {
    throw new Error("Method not implemented.");
  }
  
  createWithPreDough(): ICalculator<
    IParameterWithPreDough,
    IResultWithPreDough
  > {
    throw new Error("Method not implemented.");
  }
}
