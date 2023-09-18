import { ReactComponent as Yeast } from "../../../assets/yeast.svg";
import { useTranslation } from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import { ITile } from "./ITile";

export const YeastTile: React.FC<ITile> = (props) => {
  const { t } = useTranslation();
  return (
    <IngredientTile
      ingredient={{
        name: t(texts.ingredients.yeast),
        amount: props.amount,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Yeast className={className} />}
    />
  );
};
