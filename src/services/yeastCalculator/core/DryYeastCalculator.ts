import { IYeastCalculator } from "./IYeastCalculator";

class DryYeastCalculatorDefault implements IYeastCalculator {
  calc(flour: number): number {
    throw new Error("Method not implemented.");
  }
}

export const DryYeastCalculator = new DryYeastCalculatorDefault();
