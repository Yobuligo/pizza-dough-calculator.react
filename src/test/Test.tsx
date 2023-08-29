import styles from "./Test.module.css";

export const Test: React.FC = () => {
  return (
    <div className={styles.test}>
      <button disabled>Vorteig</button>
      <button>Restteig</button>
    </div>
  );
};
