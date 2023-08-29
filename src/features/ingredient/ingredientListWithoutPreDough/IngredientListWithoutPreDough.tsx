import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { FlourTile } from "../ingredientTiles/FlourTile";
import { HoneyTile } from "../ingredientTiles/HoneyTile";
import { SaltTile } from "../ingredientTiles/SaltTile";
import { WaterTile } from "../ingredientTiles/WaterTile";
import { YeastTile } from "../ingredientTiles/YeastTile";
import styles from "./IngredientListWithoutPreDough.module.css";

export const IngredientListWithoutPreDough: React.FC = () => {
  const context = useContext(AppContext);
  const recipe = context.recipeWithoutPreDough.value;

  return (
    <>
      <div className={styles.ingredientList}>
        <FlourTile amount={recipe.flour} />
        <WaterTile amount={recipe.water} />
      </div>
      <div className={styles.ingredientList}>
        <HoneyTile amount={recipe.honey} />
        <SaltTile amount={recipe.salt} />
        <YeastTile amount={recipe.yeast} />
      </div>
    </>
  );
};
