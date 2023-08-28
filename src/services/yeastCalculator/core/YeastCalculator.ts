import { RisingTimeType } from "../../../types/RisingTimeType";
import { IYeastCalculator } from "./IYeastCalculator";

export abstract class YeastCalculator implements IYeastCalculator {
  /**
   * @param yeastPer500Grams Yeast per 500 grams for long rising time
   * @param factor Factor for short rising time
   */
  constructor(private yeastPer500Grams: number, private factor: number) {}

  calc(flour: number, risingTime: RisingTimeType): number {
    switch (risingTime) {
      case RisingTimeType.LONG:
        return (Math.floor(flour - 1 / 500) + 1) * this.yeastPer500Grams;
      case RisingTimeType.SHORT:
        return (Math.round(flour / 500) * 500) / this.factor;
      default:
        throw new Error(
          `Error while calculating amount yeast. Rising time '${risingTime}' is not supported.`
        );
    }
  }
}
