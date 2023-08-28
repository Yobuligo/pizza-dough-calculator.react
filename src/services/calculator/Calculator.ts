import { ICalculator } from "../ICalculator";
import { IParameter } from "./IParameter";
import { IResult } from "./IResult";

export class Calculator implements ICalculator<IParameter, IResult>{
    calc(parameter: IParameter): IResult {
        throw new Error("Method not implemented.");
    }
}