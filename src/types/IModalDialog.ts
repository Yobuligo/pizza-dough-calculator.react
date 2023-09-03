import { IModalDialogConfig } from "./IModalDialogConfig";

export interface IModalDialog {
  show(modalDialogConfig: IModalDialogConfig): void;
}
