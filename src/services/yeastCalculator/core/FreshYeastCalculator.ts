import { IYeastCalculator } from "./IYeastCalculator";

class FreshYeastCalculatorDefault implements IYeastCalculator {
  calc(flour: number): number {
    throw new Error("Method not implemented.");
  }
}

export const FreshYeastCalculator = new FreshYeastCalculatorDefault();
