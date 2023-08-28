import { ICalculator } from "../core/ICalculator";
import { IParameterWithoutPreDough } from "./IParameterWithoutPreDough";
import { IResultWithoutPreDough } from "./IResultWithoutPreDough";

export class CalculatorWithoutPreDough implements ICalculator<IParameterWithoutPreDough, IResultWithoutPreDough>{
    calc(parameter: IParameterWithoutPreDough): IResultWithoutPreDough {
        throw new Error("Method not implemented.");
    }
}