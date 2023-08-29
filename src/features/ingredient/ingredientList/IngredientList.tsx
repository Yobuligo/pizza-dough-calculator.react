import { useContext, useState } from "react";
import { ToggleButton } from "../../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../../components/toggleButtonGroup/ToggleButtonGroup";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IngredientListMainPreDough } from "../ingredientListMainDough/IngredientListMainDough";
import { IngredientListPreDough } from "../ingredientListPreDough/IngredientListPreDough";
import { IngredientListWithoutPreDough } from "../ingredientListWithoutPreDough/IngredientListWithoutPreDough";
import styles from "./IngredientList.module.css";

export const IngredientList: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const [selected, setSelected] = useState(0);

  let content;
  if (context.doughConfig.value.usePreDough) {
    if (selected === 0) {
      content = <IngredientListPreDough />;
    } else {
      content = <IngredientListMainPreDough />;
    }
  } else {
    content = <IngredientListWithoutPreDough />;
  }

  return (
    <>
      <header className={styles.ingredientListHeader}>
        <ToggleButtonGroup
          disabled={!context.doughConfig.value.usePreDough}
          onSelected={(index) => setSelected(index)}
          selected={selected}
        >
          <ToggleButton
            className={styles.ingredientListHeaderToggleButton}
            caption={t.doughTypes.preDough}
          />
          <ToggleButton
            className={styles.ingredientListHeaderToggleButton}
            caption={t.doughTypes.mainDough}
          />
        </ToggleButtonGroup>
      </header>
      {content}
    </>
  );
};
