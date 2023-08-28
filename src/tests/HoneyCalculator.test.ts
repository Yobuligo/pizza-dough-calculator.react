import { HoneyCalculator } from "../services/honeyCalculator/HoneyCalculator";

describe("HoneyCalculator", () => {
  it("returns value for flour smaller 1000", () => {
    expect(HoneyCalculator.calc(900)).toBe(5);
  });

  it("returns value for flour for 1500", () => {
    expect(HoneyCalculator.calc(1500)).toBe(10);
  });

  it("returns value for 6000 if smaller 7000", () => {
    expect(HoneyCalculator.calc(6999)).toBe(35);
  });

  it("returns value for 6000 if greater equal 7000", () => {
    expect(HoneyCalculator.calc(7000)).toBe(35);
  });

  it("returns value for 6000 if greater 7000", () => {
    expect(HoneyCalculator.calc(8000)).toBe(35);
  });
});
