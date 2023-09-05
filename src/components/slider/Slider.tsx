import { useEffect, useMemo, useState } from "react";
import { getDecimalPlaces } from "../../utils/getDecimalPlaces";
import { ISliderProps } from "./ISliderProps";
import styles from "./Slider.module.css";

export const Slider: React.FC<ISliderProps> = (props) => {
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

  return (
    <input
      className={styles.slider}
      type="range"
      min={props.min}
      max={sliderMax}
      value={sliderValue}
      onChange={onChange}
    />
  );
};
