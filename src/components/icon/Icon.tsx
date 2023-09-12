import { style } from "../../utils/style";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.css";

export const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span
      className={style("material-symbols-outlined", styles.icon)}
      onClick={props.onClick}
    >
      {props.iconType}
    </span>
  );
};
