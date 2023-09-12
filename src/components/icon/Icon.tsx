import { IIconProps } from "./IIconProps";

export const Icon: React.FC<IIconProps> = (props) => {
  return <span className={props.iconType}>menu</span>;
};
