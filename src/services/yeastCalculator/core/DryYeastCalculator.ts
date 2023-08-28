import { YeastCalculator } from "./YeastCalculator";

class DryYeastCalculatorDefault extends YeastCalculator {
  constructor() {
    super(0.83, 71.42857143);
  }
}

export const DryYeastCalculator = new DryYeastCalculatorDefault();
