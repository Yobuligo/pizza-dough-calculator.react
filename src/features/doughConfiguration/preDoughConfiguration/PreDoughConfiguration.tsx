import { useState } from "react";
import { Switch } from "../../../components/switch/Switch";
import { useTranslation } from "../../../hooks/useTranslation";
import { ConfigurationItem } from "../components/configuration/ConfigurationItem";
import styles from "./PreDoughConfiguration.module.css";

export const PreDoughConfiguration: React.FC = () => {
  const [preDoughUsed, setPreDoughUsed] = useState(false);
  const { t } = useTranslation();

  return (
    <ConfigurationItem configuration={{ name: t.parameters.preparePreDough }}>
      <div className={styles.preDoughConfiguration}>
        <Switch
          id="preDough"
          onChange={(_, checked) => setPreDoughUsed(checked)}
        />
        <input id="preDoughPercentage" type="number" disabled={!preDoughUsed} />
        <label className={styles.percentageLabel} htmlFor="preDoughPercentage">
          %
        </label>
      </div>
    </ConfigurationItem>
  );
};
