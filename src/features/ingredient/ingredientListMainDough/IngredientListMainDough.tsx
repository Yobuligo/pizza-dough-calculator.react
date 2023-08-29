import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { FlourTile } from "../ingredientTiles/FlourTile";
import { SaltTile } from "../ingredientTiles/SaltTile";
import { WaterTile } from "../ingredientTiles/WaterTile";
import styles from "./IngredientListMainDough.module.css";

export const IngredientListMainPreDough: React.FC = () => {
  const context = useContext(AppContext);
  const recipe = context.recipeWithPreDough.value.dough;

  return (
    <>
      <div className={styles.ingredientList}>
        <FlourTile amount={recipe.flour} />
        <WaterTile amount={recipe.water} />
      </div>
      <div className={styles.ingredientList}>
        <SaltTile amount={recipe.salt} />
      </div>
    </>
  );
};
