import { IParameter } from "../calculator/calculatorWithoutPreDough/IParameter";
import { HoneyCalculator } from "../honeyCalculator/HoneyCalculator";
import { YeastCalculatorFactory } from "../yeastCalculator/YeastCalculatorFactory";
import { ITotalMassCalculator } from "./ITotalMassCalculator";
import { ITotalMassResult } from "./ITotalMassResult";

class TotalMassCalculatorDefault implements ITotalMassCalculator {
  calc(parameter: IParameter): ITotalMassResult {
    const yeastCalculator = YeastCalculatorFactory.create(parameter.yeastType);

    const hydration = parameter.hydration / 100 + 1;

    const sumWeightOfDoughPiece =
      parameter.numberOfPizzas * parameter.weightOfDoughPiece;

    const hydrationPerSumWeightOfDoughPiece = sumWeightOfDoughPiece / hydration;

    const totalWithoutSalt = Math.round(
      hydrationPerSumWeightOfDoughPiece +
        hydrationPerSumWeightOfDoughPiece * (parameter.hydration / 100) -
        (hydrationPerSumWeightOfDoughPiece / 100) * parameter.salt
    );

    const totalFlour = Math.round(totalWithoutSalt / hydration);

    const totalWater = Math.round((totalFlour * parameter.hydration) / 100);

    const totalHoney = Math.round(HoneyCalculator.calc(totalFlour));

    const totalYeast = Math.round(
      yeastCalculator.calc(totalFlour, parameter.risingTime)
    );

    const totalWithoutSaltYeastHoney = Math.round(
      totalWithoutSalt - totalHoney - totalYeast
    );

    const totalSalt = Math.round(
      ((hydrationPerSumWeightOfDoughPiece - totalHoney - totalYeast) / 100) *
        parameter.salt
    );

    return {
      totalFlour,
      totalHoney,
      totalSalt,
      totalWater,
      totalWithoutSalt,
      totalWithoutSaltYeastHoney,
      totalYeast,
    };
  }
}

export const TotalMassCalculator = new TotalMassCalculatorDefault();
