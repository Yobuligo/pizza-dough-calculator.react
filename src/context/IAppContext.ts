import { IValue } from "../types/IValue";

export interface IAppContext {
  numberOfPizzas: IValue<number>;
  weightOfDoughPiece: IValue<number>;
  hydration: IValue<number>;
  salt: IValue<number>;
  amountPreDough: IValue<number>;
  // "risingTime": "Rising time",
  // "short": "Short",
  // "long": "Long",
  // "yeastType": "Yeast type",
  // "dryYeast": "Dry yeast",
  // "freshYeast": "Fresh yeast"
}
