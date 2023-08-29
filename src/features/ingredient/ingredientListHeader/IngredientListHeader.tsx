import { useContext } from "react";
import { ToggleButton } from "../../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../../components/toggleButtonGroup/ToggleButtonGroup";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { IIngredientListHeaderProps } from "./IIngredientListHeaderProps";
import styles from "./IngredientListHeader.module.css";

export const IngredientListHeader: React.FC<IIngredientListHeaderProps> = (
  props
) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <div className={styles.ingredientListHeader}>
      <ToggleButtonGroup
        disabled={!context.doughConfig.value.usePreDough}
        onSelected={props.onSelect}
        selected={props.selected}
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
    </div>
  );
};
