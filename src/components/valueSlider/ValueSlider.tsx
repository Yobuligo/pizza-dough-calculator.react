import { useEffect, useMemo, useState } from "react";
import { getDecimalPlaces } from "../../utils/math/getDecimalPlaces";
import { Button } from "../button/Button";
import { IValueSliderProps } from "./IValueSliderProps";
import styles from "./ValueSlider.module.css";

export const ValueSlider: React.FC<IValueSliderProps> = (props) => {
  const interval = props.interval ?? 1;
  const decimalPlaces = getDecimalPlaces(interval);
  const round = (value: number): number => {
    if (decimalPlaces === 0) {
      return value;
    }
    const product = value * (10 * decimalPlaces);
    const rounded = Math.round(product);
    const result = rounded / (10 * decimalPlaces);
    return result;
  };

  const initialValue = props.initialValue ?? 0;
  const [value, setValue] = useState(initialValue);
  const [sliderValue, setSliderValue] = useState(
    Math.floor(initialValue / interval)
  );
  const sliderMax = useMemo((): number => {
    return props.max / interval;
  }, [interval, props.max]);

  useEffect(() => {
    props.onChange?.(value);
  }, [props, value]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= props.min && newValue <= sliderMax) {
      setValue(round(newValue * interval));
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
        previous = round(previous);
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
        previous = round(previous);
      }
      return previous;
    });
    setSliderValue((previous) => {
      if (previous < sliderMax) {
        previous++;
      }
      return previous;
    });
  };

  if (props.onCancel) {
    props.onCancel(() => props.onChange?.(initialValue));
  }

  return (
    <div>
      <div className={styles.valueContainer}>
        <input
          className={styles.valueInput}
          type="number"
          value={value}
          onChange={onChange}
        />
        <div className={styles.unit}>{props.unit}</div>
      </div>
      <div className={styles.sliderContainer}>
        <Button className={styles.button} onClick={onDecreaseValue}>
          -
        </Button>
        <input
          className={styles.slider}
          type="range"
          min={props.min}
          max={sliderMax}
          value={sliderValue}
          onChange={onChange}
        />
        <Button className={styles.button} onClick={onIncreaseValue}>
          +
        </Button>
      </div>
    </div>
  );
};
