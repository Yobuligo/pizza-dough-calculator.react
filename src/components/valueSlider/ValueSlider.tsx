import { useState } from "react";
import { IValueSliderProps } from "./IValueSliderProps";
import styles from "./ValueSlider.module.css";

export const ValueSlider: React.FC<IValueSliderProps> = (props) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(event) => {
          const currentValue = parseInt(event.target.value);
          if (currentValue >= props.min && currentValue <= props.max) {
            setValue(currentValue);
          } else if (event.target.value === "") {
            setValue(0);
          }
        }}
      />
      <div className={styles.valueSliderContainer}>
        <button
          onClick={() =>
            setValue((previous) => {
              if (previous > props.min) {
                previous--;
              }
              return previous;
            })
          }
        >
          -
        </button>

        <input
          className={styles.valueSliderInput}
          type="range"
          min={props.min}
          max={props.max}
          value={value}
          onChange={(event) => setValue(parseInt(event.target.value))}
        />

        <button
          onClick={() =>
            setValue((previous) => {
              if (previous < props.max) {
                previous++;
              }
              return previous;
            })
          }
        >
          +
        </button>
      </div>
    </div>
  );
};
