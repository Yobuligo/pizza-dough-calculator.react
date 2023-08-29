import { useState } from "react";
import { style } from "../../utils/style";
import { IToggleButtonGroupProps } from "./IToggleButtonGroupProps";
import styles from "./ToggleButtonGroup.module.css";

export const ToggleButtonGroup: React.FC<IToggleButtonGroupProps> = (props) => {
  const [selected, setSelected] = useState(0);

  const items = props.children.map((item, index) => {
    return (
      <button
        key={index}
        className={style(
          styles.toggleButton,
          item.props.className,
          selected === index
            ? styles.toggleButtonSelected
            : styles.toggleButtonUnselected
        )}
        onClick={() => {
          setSelected(index);
          item.props.onClick?.();
        }}
        disabled={selected === index}
      >
        {item.props.caption}
      </button>
    );
  });

  return <>{items}</>;
};
