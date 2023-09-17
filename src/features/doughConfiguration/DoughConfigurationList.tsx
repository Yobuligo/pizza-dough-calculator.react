import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useTranslation } from "../../hooks/useTranslation";
import { texts } from "../../utils/translation/texts";
import { Unit } from "../ingredient/model/Unit";
import styles from "./DoughConfigurationList.module.css";
import { ConfigurationInputItem } from "./components/configuration/configurationInputItem/ConfigurationInputItem";
import { ConfigurationToggleButton } from "./components/configuration/configurationToggleButton/ConfigurationToggleButton";
import { PreDoughConfigurationItem } from "./preDoughConfiguration/PreDoughConfigurationItem";

export const DoughConfigurationList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <div className={styles.doughConfigurationList}>
      <fieldset>
        <legend>{t(texts.parameters.title)}</legend>
        <div className={styles.configurationItemList}>
          <ConfigurationInputItem
            configuration={{ name: t(texts.parameters.numberOfPizzas) }}
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
          <ConfigurationInputItem
            configuration={{ name: t(texts.parameters.weightOfDoughPiece) }}
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
          <ConfigurationInputItem
            configuration={{ name: t(texts.parameters.hydration) }}
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
          <ConfigurationInputItem
            configuration={{ name: t(texts.parameters.salt) }}
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
            configuration={{ name: t(texts.parameters.risingTime) }}
            values={[t(texts.parameters.short), t(texts.parameters.long)]}
            selected={context.doughConfig.value.risingTime}
            onChange={(index) =>
              context.doughConfig.setValue((previous) => {
                return { ...previous, risingTime: index };
              })
            }
          />
          <ConfigurationToggleButton
            configuration={{ name: t(texts.parameters.yeastType) }}
            values={[
              t(texts.parameters.dryYeast),
              t(texts.parameters.freshYeast),
            ]}
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
