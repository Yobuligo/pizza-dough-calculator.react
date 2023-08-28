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

    const totalWithoutSalt =
      hydrationPerSumWeightOfDoughPiece +
      hydrationPerSumWeightOfDoughPiece * (parameter.hydration / 100) -
      (hydrationPerSumWeightOfDoughPiece / 100) * parameter.salt;

    const totalFlour = totalWithoutSalt / hydration;

    const totalWater = (totalFlour * parameter.hydration) / 100;

    const totalHoney = HoneyCalculator.calc(totalFlour);

    const totalYeast = yeastCalculator.calc(totalFlour, parameter.risingTime);

    const totalWithoutSaltYeastHoney =
      totalWithoutSalt - totalHoney - totalYeast;

    const totalSalt =
      ((hydrationPerSumWeightOfDoughPiece - totalHoney - totalYeast) / 100) *
      parameter.salt;

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
