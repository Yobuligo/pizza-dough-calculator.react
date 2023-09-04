import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode | undefined;
  onClose?: () => void;
  onOkay?: () => void;
  show: boolean;
  title?: string;
  width?: string;
}
