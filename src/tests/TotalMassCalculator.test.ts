import { TotalMassCalculator } from "../services/totalMassCalculator/TotalMassCalculator";
import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";

describe("TotalMassCalculator", () => {
  it("check result from Excel", () => {
    const totalMassResult = TotalMassCalculator.calc({
      hydration: 50,
      numberOfPizzas: 9,
      risingTime: RisingTimeType.LONG,
      salt: 3.8,
      weightOfDoughPiece: 280,
      yeastType: YeastType.FRESH,
    });

    expect(totalMassResult.totalFlour).toBe(1637);
    expect(totalMassResult.totalHoney).toBe(10);
    expect(totalMassResult.totalSalt).toBe(63);
    expect(totalMassResult.totalWater).toBe(819);
    expect(totalMassResult.totalWithoutSalt).toBe(2456);
    expect(totalMassResult.totalWithoutSaltYeastHoney).toBe(2436);
    expect(totalMassResult.totalYeast).toBe(10);
  });
});
