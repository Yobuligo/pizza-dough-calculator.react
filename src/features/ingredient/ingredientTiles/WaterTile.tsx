import { ReactComponent as Water } from "../../../assets/water.svg";
import { useTranslation } from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import { ITile } from "./ITile";

export const WaterTile: React.FC<ITile> = (props) => {
  const { t } = useTranslation();
  return (
    <IngredientTile
      ingredient={{
        name: t(texts.ingredients.water),
        amount: props.amount,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Water className={className} />}
    />
  );
};
