import { IParameterWithPreDough } from "../services/calculator/calculatorWithPreDough/IParameterWithPreDough";
import { IParameter } from "../services/calculator/calculatorWithoutPreDough/IParameter";

export interface IDoughConfig extends IParameter, IParameterWithPreDough {
  usePreDough: boolean;
}
