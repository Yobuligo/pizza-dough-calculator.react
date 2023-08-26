import { IValue } from "../types/IValue";
import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";

export interface IAppContext {
  numberOfPizzas: IValue<number>;
  weightOfDoughPiece: IValue<number>;
  hydration: IValue<number>;
  salt: IValue<number>;
  usePreDough: IValue<boolean>;
  amountPreDough: IValue<number>;
  risingTimeType: IValue<RisingTimeType>;
  yeastType: IValue<YeastType>;
}
