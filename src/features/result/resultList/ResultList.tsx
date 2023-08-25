import { ResultParameter } from "../resultParameter/ResultParameter";
import { IResultListProps } from "./IResultListProps";
import styles from "./ResultList.module.css";

export const ResultList: React.FC<IResultListProps> = (props) => {
  const items = props.parameters.map((parameter) => (
    <div className={styles.resultListItem} key={parameter.id}>
      <ResultParameter parameter={parameter} />
    </div>
  ));
  return <>{items}</>;
};
