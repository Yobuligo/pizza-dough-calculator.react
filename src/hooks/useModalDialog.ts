import { IModalDialog } from "../types/IModalDialog";
import { IModalDialogConfig } from "../types/IModalDialogConfig";

export const modalDialog = (): IModalDialog => {
  const show = (modalDialogConfig: IModalDialogConfig) => {};
  return { show };
};
