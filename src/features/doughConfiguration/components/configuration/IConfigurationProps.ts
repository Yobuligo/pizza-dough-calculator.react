import { ReactNode } from "react";
import { IDoughConfiguration } from "../../model/IDoughConfiguration";

export interface IConfigurationProps {
  configuration: IDoughConfiguration;
  children: ReactNode | ReactNode[];
}
