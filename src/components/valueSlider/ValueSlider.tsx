import { useEffect, useMemo, useState } from "react";
import { IValueSliderProps } from "./IValueSliderProps";
import styles from "./ValueSlider.module.css";

export const ValueSlider: React.FC<IValueSliderProps> = (props) => {
  const interval = props.interval ?? 1;
  const initialValue = props.initialValue ?? 0;
  const [value, setValue] = useState(initialValue);
  const [sliderValue, setSliderValue] = useState(initialValue / interval);
  const sliderMax = useMemo((): number => {
    return props.max / interval;
  }, [interval, props.max]);

  useEffect(() => {
    props.onChange?.(value);
  }, [props, value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= props.min && newValue <= sliderMax) {
      setValue(newValue * interval);
      setSliderValue(newValue);
    } else if (event.target.value === "") {
      setValue(0);
      setSliderValue(0);
    }
  };

  const onDecreaseValue = () => {
    setValue((previous) => {
      if (previous > props.min) {
        previous -= interval;
      }
      return previous;
    });
    setSliderValue((previous) => {
      if (previous > props.min) {
        previous--;
      }
      return previous;
    });
  };

  const onIncreaseValue = () => {
    setValue((previous) => {
      if (previous < props.max) {
        previous += interval;
      }
      return previous;
    });
    setSliderValue((previous) => {
      if (previous < props.max) {
        previous++;
      }
      return previous;
    });
  };

  return (
    <div>
      <input type="number" value={value} onChange={onChange} />
      <div className={styles.valueSliderContainer}>
        <button onClick={onDecreaseValue}>-</button>
        <input
          className={styles.valueSliderInput}
          type="range"
          min={props.min}
          max={sliderMax}
          value={sliderValue}
          onChange={onChange}
        />
        <button onClick={onIncreaseValue}>+</button>
      </div>
    </div>
  );
};
