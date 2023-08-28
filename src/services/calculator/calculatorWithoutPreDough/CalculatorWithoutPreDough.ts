import { ICalculator } from "../core/ICalculator";
import { IParameter } from "./IParameter";
import { IResultWithoutPreDough } from "./IResultWithoutPreDough";

export class CalculatorWithoutPreDough implements ICalculator<IParameter, IResultWithoutPreDough>{
    calc(parameter: IParameter): IResultWithoutPreDough {
        throw new Error("Method not implemented.");
    }
}