import { IParameterWithPreDough } from "../services/calculator/calculatorWithPreDough/IParameterWithPreDough";
import { IParameter } from "../services/calculator/calculatorWithoutPreDough/IParameter";
import { DoughType } from "../types/DoughType";

export interface IDoughConfig extends IParameter, IParameterWithPreDough {
  selectedDoughType: DoughType;
  usePreDough: boolean;
}
