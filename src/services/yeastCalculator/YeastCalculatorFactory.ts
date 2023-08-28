import { YeastType } from "../../types/YeastType";
import { DryYeastCalculator } from "./core/DryYeastCalculator";
import { FreshYeastCalculator } from "./core/FreshYeastCalculator";
import { IYeastCalculator } from "./core/IYeastCalculator";
import { IYeastCalculatorFactory } from "./core/IYeastCalculatorFactory";

class YeastCalculatorFactoryDefault implements IYeastCalculatorFactory {
  create(yeastType: YeastType): IYeastCalculator {
    switch (yeastType) {
      case YeastType.DRY:
        return DryYeastCalculator;
      case YeastType.FRESH:
        return FreshYeastCalculator;
      default:
        throw new Error(
          `Error while getting YeastCalculator. Yeast type '${yeastType}' is not supported.`
        );
    }
  }
}

export const YeastCalculatorFactory = new YeastCalculatorFactoryDefault();
