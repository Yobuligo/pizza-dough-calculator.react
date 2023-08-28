import styles from "./IngredientTile.module.css";
import { IIngredientProps } from "./IIngredientTileProps";

export const IngredientTile: React.FC<IIngredientProps> = (props) => {
  return (
    <div className={styles.ingredientTile}>
      <div className={styles.ingredientGrid}>
        {props.image(styles.image)}
        <div className={styles.ingredientTitle}>{props.ingredient.name}</div>
        <div
          className={styles.ingredientAmount}
        >{`${props.ingredient.amount}${props.ingredient.unit}`}</div>
      </div>
    </div>
  );
};
