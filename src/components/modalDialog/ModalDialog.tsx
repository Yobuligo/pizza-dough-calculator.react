import ReactDOM from "react-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { texts } from "../../utils/translation/texts";
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

  const title = typeof props.title === "function" ? props.title() : props.title;

  return ReactDOM.createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modalBackdrop} onClick={props.onClose}></div>
      <Card className={styles.modalDialog} style={{ width: props.width }}>
        <header>
          <h3 className={styles.modalDialogHeader}>{title}</h3>
        </header>
        <main className={styles.modalDialogMain}>{props.component}</main>
        <footer className={styles.modalDialogFooter}>
          {props.onClose && (
            <Button onClick={props.onClose}>{t(texts.dialog.cancel)}</Button>
          )}
          {props.onOkay && (
            <Button className={styles.okayButton} onClick={onOkay}>
              {t(texts.dialog.okay)}
            </Button>
          )}
        </footer>
      </Card>
    </div>,
    document.getElementById("modalContainer")!
  );
};
