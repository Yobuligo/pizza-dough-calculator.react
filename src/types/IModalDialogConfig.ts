import { ReactNode } from "react";

export interface IModalDialogConfig {
  component?: ReactNode | undefined;
  onClose?: () => void;
  onOkay?: () => void;
  show: boolean;

  /**
   * Either directly set the text or provide the text key via function.
   * By providing a text directly means it probably won't be able to translate directly.
   * Instead provide the key. Whenever the modal dialog is rerendered the text key is used to provide to text in the current selected language
   */
  title?: string | (() => string);
  width?: string;
}
