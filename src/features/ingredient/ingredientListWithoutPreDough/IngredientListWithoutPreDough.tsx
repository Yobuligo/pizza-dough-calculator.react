import { useContext } from "react";
import { ReactComponent as Flour } from "../../../assets/grain.svg";
import { ReactComponent as Honey } from "../../../assets/honey.svg";
import { ReactComponent as Salt } from "../../../assets/salt.svg";
import { ReactComponent as Water } from "../../../assets/water.svg";
import { ReactComponent as Yeast } from "../../../assets/yeast.svg";
import { ToggleButton } from "../../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../../components/toggleButtonGroup/ToggleButtonGroup";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import styles from "./IngredientListWithoutPreDough.module.css";

export const IngredientListWithoutPreDough: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const recipe = context.recipeWithoutPreDough.value;

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

  const honey = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.honey,
        amount: recipe.honey,
        unit: Unit.MILLILITER,
      }}
      image={(className) => <Honey className={className} />}
    />
  );

  const yeast = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.yeast,
        amount: recipe.yeast,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Yeast className={className} />}
    />
  );

  return (
    <>
      <header className={styles.ingredientListHeader}>
        <ToggleButtonGroup disabled={!context.doughConfig.value.usePreDough}>
          <ToggleButton
            className={styles.ingredientListHeaderToggleButton}
            caption={t.doughTypes.preDough}
          />
          <ToggleButton
            className={styles.ingredientListHeaderToggleButton}
            caption={t.doughTypes.mainDough}
          />
        </ToggleButtonGroup>
      </header>

      <div className={styles.ingredientList}>
        {flour}
        {water}
      </div>
      <div className={styles.ingredientList}>
        {honey}
        {salt}
        {yeast}
      </div>
    </>
  );
};
