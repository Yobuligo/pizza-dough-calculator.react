import { ISliderProps } from "./ISliderProps";
import styles from "./Slider.module.css";

export const Slider: React.FC<ISliderProps> = (props) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    props.onChange?.(newValue);
  };

  return (
    <input
      className={styles.slider}
      type="range"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={onChange}
    />
  );
};
