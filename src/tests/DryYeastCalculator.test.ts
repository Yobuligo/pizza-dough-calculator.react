import { DryYeastCalculator } from "../services/yeastCalculator/core/DryYeastCalculator";
import { RisingTimeType } from "../types/RisingTimeType";

describe("DryYeastCalculator", () => {
  it("return for 1637 long rising time", () => {
    expect(DryYeastCalculator.calc(1637, RisingTimeType.LONG)).toBe(3.32);
  });

  it("return for 2365 long rising time", () => {
    expect(DryYeastCalculator.calc(2365, RisingTimeType.LONG)).toBe(4.1499999999999995);
  });

  it("return for 1637 short rising time", () => {
    expect(DryYeastCalculator.calc(1637, RisingTimeType.SHORT)).toBe(21);
  });

  it("return for 2365 short rising time", () => {
    expect(DryYeastCalculator.calc(2365, RisingTimeType.SHORT)).toBe(35);
  });
});
