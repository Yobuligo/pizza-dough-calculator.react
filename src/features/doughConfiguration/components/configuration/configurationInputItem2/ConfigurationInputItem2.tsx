import { Button } from "../../../../../components/button/Button";
import { Slider } from "../../../../../components/slider/slider/Slider";
import { SliderStepper } from "../../../../../components/slider/sliderStepper/SliderStepper";
import { ConfigurationItem } from "../ConfigurationItem";
import styles from "./ConfigurationInputItem2.module.css";
import { IConfigurationInputItem2Props } from "./IConfigurationInputItem2Props";
import Test from "./Test";

export function ConfigurationInputItem2<T>(
  props: IConfigurationInputItem2Props<T>
) {
  const getTypeByInitialValue = (value: T) => {
    switch (typeof value) {
      case "number":
      case "bigint": {
        return "number";
      }
      default:
        return "text";
    }
  };

  return (
    <div className={styles.configurationInputItem}>
      <ConfigurationItem
        configuration={props.configuration}
        className={`${styles.configurationItem} ${props.className}`}
      >
        {props.children}
        <Button className={styles.buttonLeft}>{`<`}</Button>
        <input
          type={getTypeByInitialValue(props.initialValue)}
          onChange={(event) => props.onInputChange(event.target.value as T)}
          className={styles.input}
          value={props.initialValue as string}
          disabled={props.disabled}
        />
        <Button className={styles.buttonRight}>{`>`}</Button>
        {props.unit && <div className={styles.unit}>{props.unit}</div>}
      </ConfigurationItem>
      <Slider max={0} min={100} />
      {/* <SliderStepper
        initialValue={props.initialValue as number}
        interval={props.interval}
        max={props.max}
        min={props.min}
        onChange={(newValue) => {
          props.onInputChange(newValue as T);
        }}
      /> */}
    </div>
  );
}
