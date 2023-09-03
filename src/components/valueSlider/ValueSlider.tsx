import { useEffect, useState } from "react";
import { IValueSliderProps } from "./IValueSliderProps";
import styles from "./ValueSlider.module.css";

export const ValueSlider: React.FC<IValueSliderProps> = (props) => {
  const [value, setValue] = useState(props.initialValue ?? 0);

  useEffect(() => {
    props.onChange?.(value);
  }, [props, value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= props.min && newValue <= props.max) {
      setValue(newValue);
    } else if (event.target.value === "") {
      setValue(0);
    }
  };

  const onDecreaseValue = () =>
    setValue((previous) => {
      if (previous > props.min) {
        previous--;
      }
      return previous;
    });

  const onIncreaseValue = () =>
    setValue((previous) => {
      if (previous < props.max) {
        previous++;
      }
      return previous;
    });

  return (
    <div>
      <input type="number" value={value} onChange={onChange} />
      <div className={styles.valueSliderContainer}>
        <button onClick={onDecreaseValue}>-</button>
        <input
          className={styles.valueSliderInput}
          type="range"
          min={props.min}
          max={props.max}
          value={value}
          onChange={(event) => setValue(parseInt(event.target.value))}
        />
        <button onClick={onIncreaseValue}>+</button>
      </div>
    </div>
  );
};
