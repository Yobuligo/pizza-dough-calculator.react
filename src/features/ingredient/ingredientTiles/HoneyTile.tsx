import { ReactComponent as Honey } from "../../../assets/honey.svg";
import { useTranslation } from "../../../hooks/useTranslation";
import { texts } from "../../../utils/translation/texts";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import { ITile } from "./ITile";

export const HoneyTile: React.FC<ITile> = (props) => {
  const { t } = useTranslation();
  return (
    <IngredientTile
      ingredient={{
        name: t(texts.ingredients.honey),
        amount: props.amount,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Honey className={className} />}
    />
  );
};
