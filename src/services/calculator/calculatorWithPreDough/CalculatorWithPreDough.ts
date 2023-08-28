import { IRecipeWithPreDough } from "../../../types/IRecipeWithPreDough";
import { TotalMassCalculator } from "../../totalMassCalculator/TotalMassCalculator";
import { ICalculator } from "../core/ICalculator";
import { IParameterWithPreDough } from "./IParameterWithPreDough";

class CalculatorWithPreDoughDefault
  implements ICalculator<IParameterWithPreDough, IRecipeWithPreDough>
{
  calc(parameter: IParameterWithPreDough): IRecipeWithPreDough {
    const totalMassResult = TotalMassCalculator.calc(parameter);

    if (totalMassResult.totalFlour + totalMassResult.totalWater < 333) {
      throw new Error(
        `Error when calculating preDough. Total mass is to small for a pre dough.`
      );
    }

    const preDoughFlour =
      Math.round(
        ((totalMassResult.totalFlour / 100) * parameter.percentPreDough) / 25
      ) * 25;

    const preDoughWater = preDoughFlour;

    const doughFlour = totalMassResult.totalFlour - preDoughFlour;
    const doughWater = totalMassResult.totalWater - preDoughWater;

    return {
      dough: {
        flour: doughFlour,
        salt: totalMassResult.totalSalt,
        water: doughWater,
      },
      preDough: {
        flour: preDoughFlour,
        honey: totalMassResult.totalHoney,
        water: preDoughFlour,
        yeast: totalMassResult.totalYeast,
      },
    };
  }
}

export const CalculatorWithPreDough = new CalculatorWithPreDoughDefault();
