import { IIngredientTileProps } from "./IIngredientTileProps";
import styles from "./IngredientTile.module.css";

export const IngredientTile: React.FC<IIngredientTileProps> = (props) => {
  return (
    <div className={styles.ingredientTile}>
      <header className={styles.ingredientTileHeader}>
        <div className={styles.ingredientTileImage} />
        {props.image}
        <div className={styles.ingredientTileTitle}>{props.title}</div>
      </header>
      <div className={styles.ingredientTileMain}>{props.amount} g</div>
    </div>
  );
};
