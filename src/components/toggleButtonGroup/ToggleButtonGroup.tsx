import { useState } from "react";
import { style } from "../../utils/style";
import { IToggleButtonGroupProps } from "./IToggleButtonGroupProps";
import styles from "./ToggleButtonGroup.module.css";

export const ToggleButtonGroup: React.FC<IToggleButtonGroupProps> = (props) => {
  const [selected, setSelected] = useState(props.selected ?? 0);

  const items = props.children.map((item, index) => {
    return (
      <button
        key={index}
        className={style(
          styles.toggleButton,
          item.props.className,
          selected === index
            ? styles.toggleButtonSelected
            : styles.toggleButtonUnselected,
          props.disabled ? styles.toggleButtonGroupDisabled : "",
          selected === index + 1 ? styles.toggleButtonRemoveBorderRight : "",
          selected === index - 1 ? styles.toggleButtonRemoveBorderLeft : ""
        )}
        onClick={() => {
          setSelected(index);
          props.onSelected?.(index);
          item.props.onClick?.();
        }}
        disabled={selected === index || props.disabled === true}
      >
        {item.props.caption}
      </button>
    );
  });

  return <div className={props.className}>{items}</div>;
};
