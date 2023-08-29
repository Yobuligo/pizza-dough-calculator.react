import { ISwitchProps } from "./ISwitchProps";
import styles from "./Switch.module.css";
import { CSSProperties, useState } from "react";

export const Switch: React.FC<ISwitchProps> = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked);
  let style: CSSProperties = {};

  const addCSSProperties = (cssProperties: CSSProperties) => {
    style = { ...style, ...cssProperties } as CSSProperties;
  };

  props.width &&
    addCSSProperties({ "--switchWidth": props.width } as CSSProperties);
  props.sliderColor &&
    addCSSProperties({ "--sliderColor": props.sliderColor } as CSSProperties);
  props.switchColorOff &&
    addCSSProperties({
      "--switchColorOff": props.switchColorOff,
    } as CSSProperties);
  props.switchColorOn &&
    addCSSProperties({
      "--switchColorOn": props.switchColorOn,
    } as CSSProperties);

  return (
    <label style={style} className={`${props.className} ${styles.switch}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={(event) => {
          setIsChecked(event.target.checked);
          props.onChange(event.target.checked);
        }}
        checked={isChecked}
      />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};
