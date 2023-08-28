import { IParameter } from "../calculator/calculatorWithoutPreDough/IParameter";
import { ITotalMassResult } from "./ITotalMassResult";

export interface ITotalMassCalculator {
  calc(parameter: IParameter): ITotalMassResult;
}
