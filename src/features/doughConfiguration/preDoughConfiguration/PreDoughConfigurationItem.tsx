import { useContext, useEffect, useState } from "react";
import { Switch } from "../../../components/switch/Switch";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { texts } from "../../../utils/translation/texts";
import { Unit } from "../../ingredient/model/Unit";
import { ConfigurationInputItem } from "../components/configuration/configurationInputItem/ConfigurationInputItem";
import styles from "./PreDoughConfigurationItem.module.css";

export const PreDoughConfigurationItem: React.FC = () => {
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
    <ConfigurationInputItem
      configuration={{ name: t(texts.parameters.preparePreDough) }}
      disabled={!usePreDough}
      onInputChange={(value) => validateAndSetAmountPreDough(value as number)}
      initialValue={context.doughConfig.value.percentPreDough}
      min={0}
      max={100}
      unit={Unit.PERCENT}
      className={styles.preDoughConfiguration}
    >
      <div className={styles.preDoughConfiguration}>
        <Switch
          onChange={(checked) => {
            setUsePreDough(checked);
          }}
          checked={usePreDough}
          className={styles.switch}
        />
      </div>
    </ConfigurationInputItem>
  );
};
