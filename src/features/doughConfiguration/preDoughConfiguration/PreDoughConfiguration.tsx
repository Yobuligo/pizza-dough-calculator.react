import styles from "./PreDoughConfiguration.module.css";
import { ConfigurationItem } from "../components/configuration/ConfigurationItem";
import { Switch } from "../../../components/switch/Switch";
import { useState } from "react";

export const PreDoughConfiguration: React.FC = () => {
  const [preDoughUsed, setPreDoughUsed] = useState(false);

  return (
    <ConfigurationItem configuration={{ name: "Prepare pre dough" }}>
      <div className={styles.preDoughConfiguration}>
        <Switch
          id="preDough"
          onChange={(_: any, checked: boolean) => setPreDoughUsed(checked)}
        />
        <input
          id="preDoughPercentage"
          type="number"
          maxLength={3}
          disabled={!preDoughUsed}
        />
        <label className={styles.percentageLabel} htmlFor="preDoughPercentage">
          %
        </label>
      </div>
    </ConfigurationItem>
  );
};
