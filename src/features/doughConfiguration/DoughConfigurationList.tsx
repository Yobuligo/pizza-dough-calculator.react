import { useContext } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import styles from "./DoughtConfigurationList.module.css";
import { ConfigurationInputItem } from "./components/configuration/configurationInputItem/ConfigurationInputItem";
import { PreDoughConfiguration } from "./preDoughConfiguration/PreDoughConfiguration";
import { AppContext } from "../../context/AppContext";

export const DoughConfigurationList: React.FC = () => {
  const { t } = useTranslation();

  const context = useContext(AppContext);

  return (
    <div className={styles.doughConfigurationList}>
      <fieldset>
        <legend>{t.parameters.title}</legend>
        <PreDoughConfiguration />
        <ConfigurationInputItem
          configuration={{ name: t.parameters.numberOfPizzas }}
          initialValue={context.doughConfig.value.numberOfPizzas}
          onInputChange={(value: number) => {
            context.doughConfig.setValue((previous) => {
              return { ...previous, numberOfPizzas: value };
            });
          }}
          children={undefined}
        />
      </fieldset>
    </div>
  );
};
