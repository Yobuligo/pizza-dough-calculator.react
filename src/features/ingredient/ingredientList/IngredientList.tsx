import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { IngredientListHeader } from "../ingredientListHeader/IngredientListHeader";
import styles from "./IngredientList.module.css";
import { IngredientListMainPreDough } from "./IngredientListMainDough";
import { IngredientListPreDough } from "./IngredientListPreDough";
import { IngredientListWithoutPreDough } from "./IngredientListWithoutPreDough";

export const IngredientList: React.FC = () => {
  const context = useContext(AppContext);
  const [selectedDoughType, setSelectedDoughType] = useState(
    context.doughConfig.value.selectedDoughType
  );

  let content;
  if (context.doughConfig.value.usePreDough) {
    if (selectedDoughType === 0) {
      content = <IngredientListPreDough />;
    } else {
      content = <IngredientListMainPreDough />;
    }
  } else {
    content = <IngredientListWithoutPreDough />;
  }

  const onSelectDoughType = (index: number) => {
    setSelectedDoughType(index);
    context.doughConfig.setValue((previous) => {
      return { ...previous, selectedDoughType: index };
    });
  };

  return (
    <>
      <IngredientListHeader
        onSelect={onSelectDoughType}
        selected={selectedDoughType}
      />
      <div className={styles.ingredientListHeader}>{content}</div>
    </>
  );
};
