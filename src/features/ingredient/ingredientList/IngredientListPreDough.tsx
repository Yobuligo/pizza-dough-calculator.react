import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { IngredientListRow } from "../ingredientListRow/IngredientListRow";
import { FlourTile } from "../ingredientTiles/FlourTile";
import { HoneyTile } from "../ingredientTiles/HoneyTile";
import { WaterTile } from "../ingredientTiles/WaterTile";
import { YeastTile } from "../ingredientTiles/YeastTile";

export const IngredientListPreDough: React.FC = () => {
  const context = useContext(AppContext);
  const recipe = context.recipeWithPreDough.value.preDough;

  return (
    <>
      <IngredientListRow>
        <FlourTile amount={recipe.flour} />
        <WaterTile amount={recipe.water} />
      </IngredientListRow>

      <IngredientListRow>
        <HoneyTile amount={recipe.honey} />
        <YeastTile amount={recipe.yeast} />
      </IngredientListRow>
    </>
  );
};
