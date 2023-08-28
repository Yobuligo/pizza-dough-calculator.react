import { IngredientTile } from "../ingredientTile/IngredientTile";
import styles from "./IngredientList.module.css";
import { ReactComponent as Flour } from "../../assets/grain.svg";
import { ReactComponent as Salt } from "../../assets/salt.svg";
import { ReactComponent as Water } from "../../assets/water.svg";
import { ReactComponent as Honey } from "../../assets/honey.svg";
import { ReactComponent as Yeast } from "../../assets/yeast.svg";

export const IngredientList: React.FC = () => {
  const flour = (
    <IngredientTile
      name="Flour"
      amount="1600g"
      image={(className) => <Flour className={className} />}
    />
  );
  const salt = (
    <IngredientTile
      name="Salt"
      amount="63g"
      image={(className) => <Salt className={className} />}
    />
  );
  const water = (
    <IngredientTile
      name="Water"
      amount="250ml"
      image={(className) => <Water className={className} />}
    />
  );
  const honey = (
    <IngredientTile
      name="Honey"
      amount="50ml"
      image={(className) => <Honey className={className} />}
    />
  );
  const yeast = (
    <IngredientTile
      name="Yeast"
      amount="5g"
      image={(className) => <Yeast className={className} />}
    />
  );

  return (
    <>
      <div className={styles.ingredientList}>
        {flour}
        {salt}
        {water}
      </div>
      <div className={styles.ingredientList}>
        {honey}
        {yeast}
      </div>
    </>
  );
};
