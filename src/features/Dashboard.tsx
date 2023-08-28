import { useTranslation } from "../hooks/useTranslation";
import { DoughConfigurationList } from "./doughConfiguration/DoughConfigurationList";
import { IngredientList } from "./ingredientList/IngredientList";
// import { IngredientTile } from "./ingredientTile/IngredientTile";

// import { ReactComponent as Grain } from "../assets/grain.svg";
// import { ReactComponent as Honey } from "../assets/honey.svg";
// import { ReactComponent as Salt } from "../assets/salt.svg";
// import { ReactComponent as Water } from "../assets/water.svg";
// import { ReactComponent as Yeast } from "../assets/yeast.svg";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <IngredientList />
      <DoughConfigurationList />
      {/* <IngredientTile
        amount={16000}
        image={<Grain {...props} />}
        title={t.ingredients.water}
      />

      <IngredientTile
        amount={16000}
        image={<Honey {...props} />}
        title={t.ingredients.honey}
      />

      <IngredientTile
        amount={16000}
        image={<Salt {...props} />}
        title={t.ingredients.salt}
      />

      <IngredientTile
        amount={16000}
        image={<Water {...props} />}
        title={t.ingredients.water}
      />

      <IngredientTile
        amount={16000}
        image={<Yeast {...props} />}
        title={t.ingredients.yeast}
      /> */}
    </>
  );
};
