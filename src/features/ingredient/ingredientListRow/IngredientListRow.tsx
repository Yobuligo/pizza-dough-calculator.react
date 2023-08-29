import { IIngredientListRowProps } from "./IIngredientListRowProps";
import styles from "./IngredientListRow.module.css";

export const IngredientListRow: React.FC<IIngredientListRowProps> = (props) => {
  return <div className={styles.ingredientListRow}>{props.children}</div>;
};
