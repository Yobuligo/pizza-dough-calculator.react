import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { IngredientListRow } from "../ingredientListRow/IngredientListRow";
import { FlourTile } from "../ingredientTiles/FlourTile";
import { HoneyTile } from "../ingredientTiles/HoneyTile";
import { SaltTile } from "../ingredientTiles/SaltTile";
import { WaterTile } from "../ingredientTiles/WaterTile";
import { YeastTile } from "../ingredientTiles/YeastTile";

export const IngredientListWithoutPreDough: React.FC = () => {
  const context = useContext(AppContext);
  const recipe = context.recipeWithoutPreDough.value;

  return (
    <>
      <IngredientListRow>
        <FlourTile amount={recipe.flour} />
        <WaterTile amount={recipe.water} />
      </IngredientListRow>
      <IngredientListRow>
        <HoneyTile amount={recipe.honey} />
        <SaltTile amount={recipe.salt} />
        <YeastTile amount={recipe.yeast} />
      </IngredientListRow>
    </>
  );
};
