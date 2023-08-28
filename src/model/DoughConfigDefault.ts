import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";
import { IDoughConfig } from "./IDoughConfig";

export const DoughConfigDefault: IDoughConfig = {
  hydration: 65,
  numberOfPizzas: 9,
  percentPreDough: 30,
  risingTime: RisingTimeType.LONG,
  salt: 3.8,
  usePreDough: true,
  weightOfDoughPiece: 280,
  yeastType: YeastType.FRESH,
};