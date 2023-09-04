import ReactDOM from "react-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { Button } from "../button/Button";
import { Card } from "../card/Card";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  const { t } = useTranslation();

  const onOkay = () => {
    props.onOkay?.();
    props.onClose?.();
  };

  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalBackdrop} onClick={props.onClose}></div>
      <Card className={styles.modalDialog} style={{ width: props.width }}>
        <header>
          <h3 className={styles.modalDialogHeader}>{props.title}</h3>
        </header>
        <main className={styles.modalDialogMain}>{props.component}</main>
        <footer className={styles.modalDialogFooter}>
          {props.onClose && (
            <Button onClick={props.onClose}>{t.dialog.cancel}</Button>
          )}
          {props.onOkay && <Button className={styles.okayButton} onClick={onOkay}>{t.dialog.okay}</Button>}
        </footer>
      </Card>
    </div>,
    document.getElementById("modalContainer")!
  );
};
