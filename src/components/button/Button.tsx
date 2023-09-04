import styles from "./Button.module.css";
import { IButtonProps } from "./IButtonProps";

export const Button: React.FC<IButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};
