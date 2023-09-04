import ReactDOM from "react-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { Card } from "../card/Card";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  const { t } = useTranslation();

  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalBackdrop} onClick={props.onClose}></div>
      <Card className={styles.modalDialog} style={{ width: props.width }}>
        <header>
          <h3 className={styles.modalDialogHeader}>{props.title}</h3>
        </header>
        <main className={styles.modalDialogMain}>{props.component}</main>
        <footer className={styles.modalDialogFooter}>
          {props.onOkay && (
            <button onClick={props.onOkay}>{t.dialog.okay}</button>
          )}
          {props.onClose && (
            <button onClick={props.onClose}>{t.dialog.cancel}</button>
          )}
        </footer>
      </Card>
    </div>,
    document.getElementById("modalContainer")!
  );
};
