import { ReactNode } from "react";
import { IIngredient } from "../model/IIngredient";

export interface IIngredientProps {
  ingredient: IIngredient;
  image: (className?: string) => ReactNode;
}
