import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { IngredientListRow } from "../ingredientListRow/IngredientListRow";
import { FlourTile } from "../ingredientTiles/FlourTile";
import { SaltTile } from "../ingredientTiles/SaltTile";
import { WaterTile } from "../ingredientTiles/WaterTile";

export const IngredientListMainPreDough: React.FC = () => {
  const context = useContext(AppContext);
  const recipe = context.recipeWithPreDough.value.dough;

  return (
    <>
      <IngredientListRow>
        <FlourTile amount={recipe.flour} />
        <WaterTile amount={recipe.water} />
      </IngredientListRow>

      <IngredientListRow>
        <SaltTile amount={recipe.salt} />
      </IngredientListRow>
    </>
  );
};
