import { IModalDialogConfig } from "./IModalDialogConfig";

export interface IModalDialog {
  show(modalDialogConfig: Omit<IModalDialogConfig, "show">): void;
}
