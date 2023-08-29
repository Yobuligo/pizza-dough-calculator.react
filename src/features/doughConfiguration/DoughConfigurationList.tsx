import { useContext } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./DoughConfigurationList.module.css";
import { ConfigurationInputItem } from "./components/configuration/configurationInputItem/ConfigurationInputItem";
import { PreDoughConfiguration } from "./preDoughConfiguration/PreDoughConfiguration";
import { AppContext } from "../../context/AppContext";
import { Unit } from "../ingredient/model/Unit";
import { ConfigurationToggleButton } from "./components/configuration/configurationToggleButton/ConfigurationToggleButton";

export const DoughConfigurationList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <div className={styles.doughConfigurationList}>
      <fieldset>
        <legend>{t.parameters.title}</legend>
        <ConfigurationInputItem
          configuration={{ name: t.parameters.numberOfPizzas }}
          initialValue={context.doughConfig.value.numberOfPizzas}
          unit={Unit.TIMES}
          onInputChange={(value: number) => {
            context.doughConfig.setValue((previous) => {
              return { ...previous, numberOfPizzas: value };
            });
          }}
        />
        <ConfigurationInputItem
          configuration={{ name: t.parameters.weightOfDoughPiece }}
          initialValue={context.doughConfig.value.weightOfDoughPiece}
          unit={Unit.GRAMS}
          onInputChange={(value: number) => {
            context.doughConfig.setValue((previous) => {
              return { ...previous, weightOfDoughPiece: value };
            });
          }}
        />
        <ConfigurationInputItem
          configuration={{ name: t.parameters.hydration }}
          initialValue={context.doughConfig.value.hydration}
          unit={Unit.PERCENT}
          onInputChange={(value: number) => {
            context.doughConfig.setValue((previous) => {
              return { ...previous, hydration: value };
            });
          }}
        />
        <ConfigurationInputItem
          configuration={{ name: t.parameters.salt }}
          initialValue={context.doughConfig.value.salt}
          unit={Unit.PERCENT}
          onInputChange={(value: number) => {
            context.doughConfig.setValue((previous) => {
              return { ...previous, salt: value };
            });
          }}
        />
        <PreDoughConfiguration />
        <ConfigurationToggleButton
          configuration={{ name: t.parameters.risingTime }}
          values={[t.parameters.short, t.parameters.long]}
        />
      </fieldset>
    </div>
  );
};
