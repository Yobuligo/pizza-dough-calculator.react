import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { FlourTile } from "../ingredientTiles/FlourTile";
import { HoneyTile } from "../ingredientTiles/HoneyTile";
import { WaterTile } from "../ingredientTiles/WaterTile";
import { YeastTile } from "../ingredientTiles/YeastTile";
import styles from "./IngredientListPreDough.module.css";

export const IngredientListPreDough: React.FC = () => {
  const context = useContext(AppContext);
  const recipe = context.recipeWithPreDough.value.preDough;

  return (
    <>
      <div className={styles.ingredientList}>
        <FlourTile amount={recipe.flour} />
        <WaterTile amount={recipe.water} />
      </div>
      <div className={styles.ingredientList}>
        <HoneyTile amount={recipe.honey} />
        <YeastTile amount={recipe.yeast} />
      </div>
    </>
  );
};
