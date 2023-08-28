import { Ingredient } from "../ingredient/Ingredient";
import styles from "./IngredientList.module.css";
import { ReactComponent as Flour } from "../../assets/grain.svg";
import { ReactComponent as Salt } from "../../assets/salt.svg";
import { ReactComponent as Water } from "../../assets/water.svg";
import { ReactComponent as Honey } from "../../assets/honey.svg";
import { ReactComponent as Yeast } from "../../assets/yeast.svg";

export const IngredientList: React.FC = () => {
  const flour = <Ingredient name="Flour" amount="1600g" image={<Flour />} />;
  const salt = <Ingredient name="Salt" amount="63g" image={<Salt />} />;
  const water = <Ingredient name="Water" amount="250ml" image={<Water />} />;
  const honey = <Ingredient name="Honey" amount="50ml" image={<Honey />} />;
  const yeast = <Ingredient name="Yeast" amount="5g" image={<Yeast />} />;

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
