import { IRecipeWithoutPreDough } from "../../../types/IRecipeWithoutPreDough";
import { TotalMassCalculator } from "../../totalMassCalculator/TotalMassCalculator";
import { ICalculator } from "../core/ICalculator";
import { IParameter } from "./IParameter";

class CalculatorWithoutPreDoughDefault
  implements ICalculator<IParameter, IRecipeWithoutPreDough>
{
  calc(parameter: IParameter): IRecipeWithoutPreDough {
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

export const CalculatorWithoutPreDough = new CalculatorWithoutPreDoughDefault();
