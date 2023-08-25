import { UnitType } from "../types/UnitType";

export interface IParameter<T> {
  id: string;
  title: string;
  unit: UnitType;
  value: T;
}
