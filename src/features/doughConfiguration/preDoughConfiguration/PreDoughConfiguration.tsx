import { useContext, useEffect, useState } from "react";
import { Switch } from "../../../components/switch/Switch";
import { useTranslation } from "../../../hooks/useTranslation";
import { ConfigurationItem } from "../components/configuration/ConfigurationItem";
import styles from "./PreDoughConfiguration.module.css";
import { AppContext } from "../../../context/AppContext";

export const PreDoughConfiguration: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const [preDoughUsed, setPreDoughUsed] = useState(context.usePreDough.value);

  const validateAndSetAmountPreDough = (amount: number) => {
    let newAmount = 0;
    if (amount > 100) {
      newAmount = 100;
    } else if (amount < 0) {
      newAmount = 0;
    } else {
      newAmount = amount;
    }
    context.amountPreDough.setValue(newAmount);
  };

  useEffect(() => {
    context.usePreDough.setValue(preDoughUsed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preDoughUsed]);

  return (
    <ConfigurationItem configuration={{ name: t.parameters.preparePreDough }}>
      <div className={styles.preDoughConfiguration}>
        <Switch
          id="preDough"
          onChange={(_, checked) => setPreDoughUsed(checked)}
        />
        <input
          id="preDoughPercentage"
          type="number"
          disabled={!preDoughUsed}
          onChange={(event) =>
            validateAndSetAmountPreDough(+event.target.value)
          }
          value={context.amountPreDough.value}
        />
        <label className={styles.percentageLabel} htmlFor="preDoughPercentage">
          %
        </label>
      </div>
    </ConfigurationItem>
  );
};
