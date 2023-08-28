import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";

export interface IParameter {
  numberOfPizzas: number;
  weightOfDoughPiece: number;
  hydration: number;
  salt: number;
  usePreDough: boolean;
  amountPreDough: number;
  risingTime: RisingTimeType;
  yeastType: YeastType;
}
