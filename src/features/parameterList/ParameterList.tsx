import { Parameter } from "../parameter/Parameter";
import { IParameterListProps } from "./IParameterListProps";
import styles from "./ParameterList.module.css";

export const ParameterList: React.FC<IParameterListProps> = (props) => {
  const items = props.parameters.map((parameter) => (
    <div key={parameter.id} className={styles.parameterListItem}>
      <Parameter parameter={parameter} />
    </div>
  ));
  return <>{items}</>;
};
