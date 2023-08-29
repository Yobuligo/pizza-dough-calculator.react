import { useContext } from "react";
import { ReactComponent as Flour } from "../../../assets/grain.svg";
import { ReactComponent as Salt } from "../../../assets/salt.svg";
import { ReactComponent as Water } from "../../../assets/water.svg";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import styles from "./IngredientListMainDough.module.css";

export const IngredientListMainPreDough: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const recipe = context.recipeWithPreDough.value.dough;

  const flour = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.flour,
        amount: recipe.flour,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Flour className={className} />}
    />
  );

  const water = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.water,
        amount: recipe.water,
        unit: Unit.MILLILITER,
      }}
      image={(className) => <Water className={className} />}
    />
  );

  const salt = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.salt,
        amount: recipe.salt,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Salt className={className} />}
    />
  );

  return (
    <>
      <div className={styles.ingredientList}>
        {flour}
        {water}
      </div>
      <div className={styles.ingredientList}>{salt}</div>
    </>
  );
};
