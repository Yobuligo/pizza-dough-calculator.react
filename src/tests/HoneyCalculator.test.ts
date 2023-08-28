import { HoneyCalculator } from "../services/honeyCalculator/HoneyCalculator";
import { IHoneyCalculator } from "../services/honeyCalculator/IHoneyCalculator";

describe("HoneyCalculator", () => {
  let honeyCalculator: IHoneyCalculator = new HoneyCalculator();

  it("returns value for flour smaller 1000", () => {
    expect(honeyCalculator.calc(900)).toBe(5);
  });

  it("returns value for flour for 1500", () => {
    expect(honeyCalculator.calc(1500)).toBe(10);
  });

  it("returns value for 6000 if smaller 7000", () => {
    expect(honeyCalculator.calc(6999)).toBe(35);
  });

  it("returns value for 6000 if greater equal 7000", () => {
    expect(honeyCalculator.calc(7000)).toBe(35);
  });

  it("returns value for 6000 if greater 7000", () => {
    expect(honeyCalculator.calc(8000)).toBe(35);
  });
});
