import { ReactComponent as Flour } from "../../../assets/grain.svg";
import { useTranslation } from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import { ITile } from "./ITile";

export const FlourTile: React.FC<ITile> = (props) => {
  const { t } = useTranslation();
  return (
    <IngredientTile
      ingredient={{
        name: t(texts.ingredients.flour),
        amount: props.amount,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Flour className={className} />}
    />
  );
};
