import { IToolbarProps } from "./IToolbarProps";
import styles from "./Toolbar.module.css";

export const Toolbar: React.FC<IToolbarProps> = (props) => {
  return <div className={styles.toolbar}>{props.children}</div>;
};
