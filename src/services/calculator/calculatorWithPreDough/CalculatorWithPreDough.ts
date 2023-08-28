import { ICalculator } from "../core/ICalculator";
import { IParameterWithPreDough } from "./IParameterWithPreDough";
import { IResultWithPreDough } from "./IResultWithPreDough";

export class CalculatorWithPreDough
  implements ICalculator<IParameterWithPreDough, IResultWithPreDough>
{
  calc(parameter: IParameterWithPreDough): IResultWithPreDough {
    throw new Error("Method not implemented.");
  }
}
