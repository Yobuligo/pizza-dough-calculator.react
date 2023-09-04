import { style } from "../../utils/style";
import styles from "./Button.module.css";
import { IButtonProps } from "./IButtonProps";

export const Button: React.FC<IButtonProps> = (props) => {
  const { className, ...propsRestricted } = { ...props };
  return (
    <button
      className={style(styles.button, props.className)}
      {...propsRestricted}
    />
  );
};
