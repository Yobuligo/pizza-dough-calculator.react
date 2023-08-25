import { useTranslation } from "../../../hooks/useTranslation";
import { ITotalMass } from "./ITotalMass";
import styles from "./TotalMass.module.css";

export const TotalMass: React.FC<ITotalMass> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.totalMass}>
      <header className={styles.totalMassHeader}>{t.result.totalMass}</header>
      <main className={styles.totalMassMain}>{props.weight}</main>
      <footer className={styles.totalMassFooter}>{t.result.grams}</footer>
    </div>
  );
};
