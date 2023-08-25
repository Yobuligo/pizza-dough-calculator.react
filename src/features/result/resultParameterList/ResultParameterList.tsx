import { ResultParameter } from "../resultParameter/ResultParameter";
import { IResultParameterListProps } from "./IResultParameterListProps";
import styles from "./ResultParameterList.module.css";

export const ResultParameterList: React.FC<IResultParameterListProps> = (
  props
) => {
  const items = props.parameters.map((parameter) => (
    <div className={styles.resultParameterListItem} key={parameter.id}>
      <ResultParameter parameter={parameter} />
    </div>
  ));
  return <>{items}</>;
};
