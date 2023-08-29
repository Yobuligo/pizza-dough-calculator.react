import { ReactComponent as Honey } from "../../../assets/honey.svg";
import { useTranslation } from "../../../hooks/useTranslation";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import { ITile } from "./ITile";

export const HoneyTile: React.FC<ITile> = (props) => {
  const { t } = useTranslation();
  return (
    <IngredientTile
      ingredient={{
        name: t.ingredients.honey,
        amount: props.amount,
        unit: Unit.MILLILITER,
      }}
      image={(className) => <Honey className={className} />}
    />
  );
};
