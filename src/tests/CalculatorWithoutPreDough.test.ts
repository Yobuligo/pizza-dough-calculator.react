import { CalculatorWithoutPreDough } from "../services/calculator/calculatorWithoutPreDough/CalculatorWithoutPreDough";
import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";

describe("CalculatorWithoutPreDough", () => {
  it("check result from Excel", () => {
    const result = CalculatorWithoutPreDough.calc({
      hydration: 50,
      numberOfPizzas: 9,
      risingTime: RisingTimeType.LONG,
      salt: 3.8,
      weightOfDoughPiece: 280,
      yeastType: YeastType.FRESH,
    });

    expect(result.flour).toBe(1637);
    expect(result.honey).toBe(10);
    expect(result.salt).toBe(63);
    expect(result.water).toBe(819);
    expect(result.yeast).toBe(10);
  });
});
