import { useTranslation } from "../../hooks/useTranslation";
import styles from "./Title.module.css";

export const Title: React.FC = () => {
  const { t } = useTranslation();
  return <h3 className={styles.title}>{t.title}</h3>;
};
