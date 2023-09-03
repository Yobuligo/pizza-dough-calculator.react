import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode | undefined;
  onClose?: () => void;
  show: boolean;
  title?: string;
}
