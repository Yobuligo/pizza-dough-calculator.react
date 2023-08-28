import { FreshYeastCalculator } from "../services/yeastCalculator/core/FreshYeastCalculator";
import { RisingTimeType } from "../types/RisingTimeType";

describe("FreshYeastCalculator", () => {
  it("return for 1637 long rising time", () => {
    expect(FreshYeastCalculator.calc(1637, RisingTimeType.LONG)).toBe(10);
  });

  it("return for 2365 long rising time", () => {
    expect(FreshYeastCalculator.calc(2365, RisingTimeType.LONG)).toBe(12.5);
  });

  it("return for 1637 short rising time", () => {
    expect(FreshYeastCalculator.calc(1637, RisingTimeType.SHORT)).toBe(63);
  });

  it("return for 2365 short rising time", () => {
    expect(FreshYeastCalculator.calc(2365, RisingTimeType.SHORT)).toBe(105);
  });  
});
