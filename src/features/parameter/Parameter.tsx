import { HTMLInputTypeAttribute, useId, useState } from "react";

import { IParameterProps } from "./IParameterProps";
import styles from "./Parameter.module.css";

export function Parameter<T>(props: IParameterProps<T>) {
  const [value, setValue] = useState<T>(props.initialValue);
  const id = useId();

  const type = (): HTMLInputTypeAttribute => {
    switch (typeof props.initialValue) {
      case "string":
        return "text";
      case "number":
        return "number";
      case "object": {
        if (props.initialValue instanceof Date) {
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
      <label htmlFor={id}>{props.label}</label>
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
    </div>
  );
}
