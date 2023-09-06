import styles from "./Test.module.css";

const NumberPicker = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scrollport}>
          <div className={styles.cell}>09</div>
          <div className={`${styles.cell} ${styles.selected}`}>10</div>
          <div className={styles.cell}>11</div>
          <div className={styles.cell}>12</div>
          <div className={styles.cell}>13</div>
          <div className={styles.cell}>14</div>
          <div className={styles.cell}>15</div>
          <div className={styles.cell}>16</div>
        </div>
      </div>
    </>
  );
};

export default NumberPicker;
