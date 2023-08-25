import { Parameter } from "../parameter/Parameter";
import { IParameterListProps } from "./IParameterListProps";

export const ParameterList: React.FC<IParameterListProps> = (props) => {
  const items = props.parameters.map((parameter) => (
    <div key={parameter.id}>
      <Parameter parameter={parameter} />
    </div>
  ));
  return <>{items}</>;
};
