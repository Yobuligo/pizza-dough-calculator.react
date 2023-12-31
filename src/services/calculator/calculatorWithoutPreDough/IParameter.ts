import { RisingTimeType } from "../../../types/RisingTimeType";
import { YeastType } from "../../../types/YeastType";

export interface IParameter {
  hydration: number;
  numberOfPizzas: number;
  risingTime: RisingTimeType;
  salt: number;
  weightOfDoughPiece: number;
  yeastType: YeastType;
}
