import { useEffect, useMemo, useState } from "react";
import { getDecimalPlaces } from "../../../utils/math/getDecimalPlaces";
import { round } from "../../../utils/math/round";
import { Button } from "../../button/Button";
import { Slider } from "../slider/Slider";
import { ISliderStepperProps } from "./ISliderStepperProps";
import styles from "./SliderStepper.module.css";

export const SliderStepper: React.FC<ISliderStepperProps> = (props) => {
  const interval = props.interval ?? 1;
  const initialValue = props.initialValue ?? 0;
  const [sliderValue, setSliderValue] = useState(
    Math.floor(initialValue / interval)
  );

  // Calculate max slider value depending on the given interval.
  // Assume props.min value = 1 props.max value = 10, but interval = 0.1
  // means the slider has 0.1, 0.2, 0.3 ... steps
  // From 0 - 10 means we have 100 steps instead of 10 (from props.max).
  const sliderMax = useMemo((): number => {
    return props.max / interval;
  }, [interval, props.max]);

  const onChange = (newValue: number) => {
    if (newValue >= props.min && newValue <= sliderMax) {
      setSliderValue(newValue);
    }
  };

  const onDecreaseValue = () => {
    setSliderValue((previous) => {
      if (previous > props.min) {
        previous--;
      }
      return previous;
    });
  };

  const onIncreaseValue = () => {
    setSliderValue((previous) => {
      if (previous < sliderMax) {
        previous++;
      }
      return previous;
    });
  };

  useEffect(() => {
    // Consider interval and calculate back from slider value to correct value
    const decimalPlaces = getDecimalPlaces(interval);
    const newValue = round(sliderValue * interval, decimalPlaces);
    props.onChange?.(newValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue]);

  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={onDecreaseValue}>
        {`<`}
      </Button>
      <Slider
        max={sliderMax}
        min={props.min}
        onChange={onChange}
        value={sliderValue}
      />
      <Button className={styles.button} onClick={onIncreaseValue}>
      {`>`}
      </Button>
    </div>
  );
};
