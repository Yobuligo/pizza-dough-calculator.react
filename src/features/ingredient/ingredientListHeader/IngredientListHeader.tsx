import { useContext } from "react";
import { ToggleButton } from "../../../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../../../components/toggleButtonGroup/ToggleButtonGroup";
import { AppContext } from "../../../context/AppContext";
import { useTranslation } from "../../../hooks/useTranslation";
import { style } from "../../../utils/style";
import { texts } from "../../../i18n/texts";
import { IIngredientListHeaderProps } from "./IIngredientListHeaderProps";
import styles from "./IngredientListHeader.module.css";

export const IngredientListHeader: React.FC<IIngredientListHeaderProps> = (
  props
) => {
  const { t } = useTranslation();
  const context = useContext(AppContext);
  const toggleButtonGroupDisabled = !context.doughConfig.value.usePreDough;

  return (
    <div className={styles.ingredientListHeader}>
      <ToggleButtonGroup
        disabled={toggleButtonGroupDisabled}
        onSelected={props.onSelect}
        selected={props.selected}
      >
        <ToggleButton
          className={style(
            styles.headerToggleButton,
            styles.headerToggleButtonLeft,
            props.selected === 0
              ? styles.headerToggleButtonSelected
              : styles.headerToggleButtonUnselected,
            toggleButtonGroupDisabled ? styles.headerToggleButtonDisabled : ""
          )}
          caption={t(texts.doughTypes.preDough)}
        />
        <ToggleButton
          className={style(
            styles.headerToggleButton,
            styles.headerToggleButtonRight,
            props.selected === 1
              ? styles.headerToggleButtonSelected
              : styles.headerToggleButtonUnselected,
            toggleButtonGroupDisabled ? styles.headerToggleButtonDisabled : ""
          )}
          caption={t(texts.doughTypes.mainDough)}
        />
      </ToggleButtonGroup>
    </div>
  );
};
