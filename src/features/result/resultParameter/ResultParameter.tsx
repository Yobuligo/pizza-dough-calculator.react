import { IResultParameterProps } from "./IResultParameterProps";
import styles from "./ResultParameter.module.css";

export function ResultParameter<T>(props: IResultParameterProps<T>) {
  return (
    <div className={styles.resultParameter}>
      <div className={styles.resultParameterItem}>
        <div className={styles.resultParameterValue}>
          {props.parameter.value as string}
        </div>
        <div className={styles.resultParameterUnit}>{props.parameter.unit}</div>
      </div>
      <div className={styles.resultParameterTitle}>{props.parameter.title}</div>
    </div>
  );
}
