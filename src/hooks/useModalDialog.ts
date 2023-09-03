import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { IModalDialog } from "../types/IModalDialog";
import { IModalDialogConfig } from "../types/IModalDialogConfig";

export const useModalDialog = (): IModalDialog => {
  const context = useContext(AppContext);

  const show = (modalDialogConfig: Omit<IModalDialogConfig, "show">) => {
    context.modalDialogConfig.setValue({ ...modalDialogConfig, show: true });
  };
  return { show };
};
