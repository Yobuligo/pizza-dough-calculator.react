import { style } from "../../utils/style";
import { IIconProps } from "./IIconProps";
import styles from "./Icon.module.css";

export const Icon: React.FC<IIconProps> = (props) => {
  return (
    <span
      className={style("material-symbols-outlined", styles.icon)}
      onClick={() => console.log(`Menu was clicked`)}
    >
      {props.iconType}
    </span>
  );
};
