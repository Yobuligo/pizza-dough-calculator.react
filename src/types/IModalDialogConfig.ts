import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode | undefined;
  show: boolean;
  title?: string;
}
