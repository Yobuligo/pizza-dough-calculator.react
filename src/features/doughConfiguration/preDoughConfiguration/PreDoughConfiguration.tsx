import { useContext, useEffect, useState } from "react";
import { Switch } from "../../../components/switch/Switch";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { ConfigurationItem } from "../components/configuration/ConfigurationItem";
import styles from "./PreDoughConfiguration.module.css";

export const PreDoughConfiguration: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const [usePreDough, setUsePreDough] = useState(
    context.doughConfig.value.usePreDough
  );

  const validateAndSetAmountPreDough = (percentPreDough: number) => {
    let newPercentPreDough = 0;
    if (percentPreDough > 100) {
      newPercentPreDough = 100;
    } else if (percentPreDough < 0) {
      newPercentPreDough = 0;
    } else {
      newPercentPreDough = percentPreDough;
    }
    context.doughConfig.setValue((previous) => {
      return { ...previous, percentPreDough: newPercentPreDough };
    });
  };

  useEffect(() => {
    context.doughConfig.setValue((previous) => {
      return { ...previous, usePreDough };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usePreDough]);

  return (
    <ConfigurationItem configuration={{ name: t.parameters.preparePreDough }}>
      <div className={styles.preDoughConfiguration}>
        <Switch
          id="preDough"
          onChange={(_, checked) => setUsePreDough(checked)}
          value={usePreDough}
        />
        <input
          id="preDoughPercentage"
          type="number"
          disabled={!usePreDough}
          onChange={(event) =>
            validateAndSetAmountPreDough(+event.target.value)
          }
          value={context.doughConfig.value.percentPreDough}
        />
        <label className={styles.percentageLabel} htmlFor="preDoughPercentage">
          %
        </label>
      </div>
    </ConfigurationItem>
  );
};
