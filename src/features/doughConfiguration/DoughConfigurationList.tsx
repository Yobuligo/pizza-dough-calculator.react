import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { Unit } from "../ingredient/model/Unit";
import styles from "./DoughConfigurationList.module.css";
import { ConfigurationInputItem } from "./components/configuration/configurationInputItem/ConfigurationInputItem";
import { ConfigurationToggleButton } from "./components/configuration/configurationToggleButton/ConfigurationToggleButton";
import { PreDoughConfigurationItem } from "./preDoughConfiguration/PreDoughConfigurationItem";
import { ConfigurationInputItem2 } from "./components/configuration/configurationInputItem2/ConfigurationInputItem2";

export const DoughConfigurationList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <div className={styles.doughConfigurationList}>
      <fieldset>
        <legend>{t.parameters.title}</legend>
        <div className={styles.configurationItemList}>
          <ConfigurationInputItem2
            configuration={{ name: t.parameters.numberOfPizzas }}
            initialValue={context.doughConfig.value.numberOfPizzas}
            min={0}
            max={100}
            unit={Unit.TIMES}
            onInputChange={(value: number) => {
              context.doughConfig.setValue((previous) => {
                return { ...previous, numberOfPizzas: value };
              });
            }}
          />
          <ConfigurationInputItem2
            configuration={{ name: t.parameters.weightOfDoughPiece }}
            initialValue={context.doughConfig.value.weightOfDoughPiece}
            min={0}
            max={1000}
            unit={Unit.GRAMS}
            onInputChange={(value: number) => {
              context.doughConfig.setValue((previous) => {
                return { ...previous, weightOfDoughPiece: value };
              });
            }}
          />
          <ConfigurationInputItem2
            configuration={{ name: t.parameters.hydration }}
            initialValue={context.doughConfig.value.hydration}
            min={0}
            max={100}
            unit={Unit.PERCENT}
            onInputChange={(value: number) => {
              context.doughConfig.setValue((previous) => {
                return { ...previous, hydration: value };
              });
            }}
          />
          <ConfigurationInputItem2
            configuration={{ name: t.parameters.salt }}
            initialValue={context.doughConfig.value.salt}
            interval={0.1}
            min={0}
            max={10}
            unit={Unit.PERCENT}
            onInputChange={(value: number) => {
              context.doughConfig.setValue((previous) => {
                return { ...previous, salt: value };
              });
            }}
          />
          <PreDoughConfigurationItem />
          <ConfigurationToggleButton
            configuration={{ name: t.parameters.risingTime }}
            values={[t.parameters.short, t.parameters.long]}
            selected={context.doughConfig.value.risingTime}
            onChange={(index) =>
              context.doughConfig.setValue((previous) => {
                return { ...previous, risingTime: index };
              })
            }
          />
          <ConfigurationToggleButton
            configuration={{ name: t.parameters.yeastType }}
            values={[t.parameters.dryYeast, t.parameters.freshYeast]}
            selected={context.doughConfig.value.yeastType}
            onChange={(index) =>
              context.doughConfig.setValue((previous) => {
                return { ...previous, yeastType: index };
              })
            }
          />
        </div>
      </fieldset>
    </div>
  );
};
