import { IHoneyCalculator } from "./IHoneyCalculator";

export class HoneyCalculator implements IHoneyCalculator {
  private honeyPer1000Grams = 5;

  calc(flour: number): number {
    // For each 1000g flour add 5g honey.
    // If flour greater 7000g, use honey amount for 6000g - 6999g
    if (flour >= 7000) {
      return this.calcInternal(6001);
    }
    return this.calcInternal(flour);
  }

  private calcInternal(flour: number) {
    return (Math.floor((flour - 1) / 1000) + 1) * this.honeyPer1000Grams;
  }
}
