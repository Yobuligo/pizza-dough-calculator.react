import styles from "./IngredientTile.module.css";
import { IIngredientProps } from "./IIngredientTileProps";

export const IngredientTile: React.FC<IIngredientProps> = (props) => {
  return (
    <div className={styles.ingredientTile}>
      <div className={styles.ingredientGrid}>
        {props.image(styles.image)}
        <div className={styles.ingredientTitle}>{props.name}</div>
        <div className={styles.ingredientAmount}>{props.amount}</div>
      </div>
    </div>
  );
};
