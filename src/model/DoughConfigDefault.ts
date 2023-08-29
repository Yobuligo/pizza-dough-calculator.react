import { DoughType } from "../types/DoughType";
import { RisingTimeType } from "../types/RisingTimeType";
import { YeastType } from "../types/YeastType";
import { IDoughConfig } from "./IDoughConfig";

export const DoughConfigDefault: IDoughConfig = {
  hydration: 65,
  numberOfPizzas: 9,
  percentPreDough: 30,
  risingTime: RisingTimeType.LONG,
  salt: 3.8,
  usePreDough: false,
  weightOfDoughPiece: 280,
  yeastType: YeastType.FRESH,
  selectedDoughType: DoughType.PRE_DOUGH,
};
