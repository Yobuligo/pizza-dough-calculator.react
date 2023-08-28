import { CalculatorWithPreDough } from "../services/calculator/calculatorWithPreDough/CalculatorWithPreDough";
import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";

describe("CalculatorWithPreDough", () => {
  it("check result from Excel", () => {
    const result = CalculatorWithPreDough.calc({
      hydration: 50,
      numberOfPizzas: 9,
      risingTime: RisingTimeType.LONG,
      salt: 3.8,
      percentPreDough: 30,
      weightOfDoughPiece: 280,
      yeastType: YeastType.FRESH,
    });

    expect(result.dough.flour).toBe(1137);
    expect(result.dough.salt).toBe(63);
    expect(result.dough.water).toBe(319);

    expect(result.preDough.flour).toBe(500);
    expect(result.preDough.honey).toBe(10);
    expect(result.preDough.water).toBe(500);
    expect(result.preDough.yeast).toBe(10);
  });
});
