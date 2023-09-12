import { IHeaderProps } from "./IHeaderProps";

export const Header: React.FC<IHeaderProps> = (props) => {
  return <header>{props.children}</header>;
};
