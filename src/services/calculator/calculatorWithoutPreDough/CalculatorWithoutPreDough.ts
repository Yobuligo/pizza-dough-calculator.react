import { TotalMassCalculator } from "../../totalMassCalculator/TotalMassCalculator";
import { ICalculator } from "../core/ICalculator";
import { IParameter } from "./IParameter";
import { IResultWithoutPreDough } from "./IResultWithoutPreDough";

export class CalculatorWithoutPreDough
  implements ICalculator<IParameter, IResultWithoutPreDough>
{
  calc(parameter: IParameter): IResultWithoutPreDough {
    const totalMassResult = TotalMassCalculator.calc(parameter);
    return {
      flour: totalMassResult.totalFlour,
      honey: totalMassResult.totalHoney,
      salt: totalMassResult.totalSalt,
      water: totalMassResult.totalWater,
      yeast: totalMassResult.totalYeast,
    };
  }
}
