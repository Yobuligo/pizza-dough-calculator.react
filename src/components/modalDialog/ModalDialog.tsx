import ReactDOM from "react-dom";
import { Card } from "../card/Card";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalBackdrop} onClick={props.onClose}></div>
      <Card className={styles.modalDialog}>{props.component}</Card>
    </div>,
    document.getElementById("modalContainer")!
  );
};
