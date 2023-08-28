import { ReactNode } from "react";

export interface IIngredientProps {
  name: string;
  amount: string;
  image: (className?: string) => ReactNode;
}
