import { HTMLInputTypeAttribute, useId, useState } from "react";

import { IParameterProps } from "./IParameterProps";
import styles from "./Parameter.module.css";

export function Parameter<T>(props: IParameterProps<T>) {
  const [value, setValue] = useState<T>(props.parameter.value);
  const id = useId();

  const type = (): HTMLInputTypeAttribute => {
    switch (typeof props.parameter.value) {
      case "string":
        return "text";
      case "number":
        return "number";
      case "object": {
        if (props.parameter.value instanceof Date) {
          return "date";
        }
        return "text";
      }
      default:
        return "text";
    }
  };

  return (
    <div className={styles.parameter}>
      <label htmlFor={id}>{props.parameter.title}</label>
      <input
        id={id}
        type={type()}
        value={value as string}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          let value = event.target.value;
          if (typeof value === "number") {
            setValue(parseInt(value) as T);
          } else {
            setValue(value as T);
          }
        }}
      />
      <div className={styles.parameterUnit}>{props.parameter.unit}</div>
    </div>
  );
}
