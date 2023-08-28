import { YeastCalculator } from "./YeastCalculator";

class FreshYeastCalculatorDefault extends YeastCalculator {
  constructor() {
    super(2.5, 23.8095238);
  }
}

export const FreshYeastCalculator = new FreshYeastCalculatorDefault();
