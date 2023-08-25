import { HTMLInputTypeAttribute, useId, useState } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export function LabeledInput<T>(props: ILabeledInputProps<T>) {
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
    <div>
      <div>
        <label htmlFor={id}>{props.label}</label>
      </div>
      <div>
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
    </div>
  );
}
