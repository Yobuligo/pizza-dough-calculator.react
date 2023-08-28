import { IngredientTile } from "../ingredientTile/IngredientTile";
import styles from "./IngredientList.module.css";
import { ReactComponent as Flour } from "../../../assets/grain.svg";
import { ReactComponent as Salt } from "../../../assets/salt.svg";
import { ReactComponent as Water } from "../../../assets/water.svg";
import { ReactComponent as Honey } from "../../../assets/honey.svg";
import { ReactComponent as Yeast } from "../../../assets/yeast.svg";
import { Unit } from "../model/Unit";
import { useTranslation } from "../../../hooks/useTranslation";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

export const IngredientList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext)

  const flour = (
    <IngredientTile
      ingredient={{ name: t.ingredients.flour, amount: 1600, unit: Unit.GRAMS }}
      image={(className) => <Flour className={className} />}
    />
  );
  const salt = (
    <IngredientTile
      ingredient={{ name: t.ingredients.salt, amount: 63, unit: Unit.GRAMS }}
      image={(className) => <Salt className={className} />}
    />
  );
  const water = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.water,
        amount: 250,
        unit: Unit.MILLILITER,
      }}
      image={(className) => <Water className={className} />}
    />
  );
  const honey = (
    <IngredientTile
      ingredient={{
        name: t.ingredients.honey,
        amount: 50,
        unit: Unit.MILLILITER,
      }}
      image={(className) => <Honey className={className} />}
    />
  );
  const yeast = (
    <IngredientTile
      ingredient={{ name: t.ingredients.yeast, amount: 5, unit: Unit.GRAMS }}
      image={(className) => <Yeast className={className} />}
    />
  );

  return (
    <>
      <div className={styles.ingredientList}>
        {flour}
        {salt}
        {water}
      </div>
      <div className={styles.ingredientList}>
        {honey}
        {yeast}
      </div>
    </>
  );
};
