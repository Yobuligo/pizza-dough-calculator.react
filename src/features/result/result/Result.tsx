import { Card } from "../../../components/card/Card";
import { ResultParameterList } from "../resultParameterList/ResultParameterList";
import { TotalMass } from "../totalMass/TotalMass";
import { IResultProps } from "./IResultProps";
import styles from "./Result.module.css";

export const Result: React.FC<IResultProps> = (props) => {
  return (
    <Card className={styles.result}>
      <div className={styles.resultTotalMass}>
        <TotalMass weight={2500} />
      </div>
      <div className={styles.resultParameters}>
        <ResultParameterList parameters={props.parameters} />
      </div>
    </Card>
  );
};
