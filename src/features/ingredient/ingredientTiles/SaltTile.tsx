import { ReactComponent as Salt } from "../../../assets/salt.svg";
import { useTranslation } from "../../../hooks/useTranslation";
import { texts } from "../../../i18n/texts";
import { IngredientTile } from "../ingredientTile/IngredientTile";
import { Unit } from "../model/Unit";
import { ITile } from "./ITile";

export const SaltTile: React.FC<ITile> = (props) => {
  const { t } = useTranslation();
  return (
    <IngredientTile
      ingredient={{
        name: t(texts.ingredients.salt),
        amount: props.amount,
        unit: Unit.GRAMS,
      }}
      image={(className) => <Salt className={className} />}
    />
  );
};
