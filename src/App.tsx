import { useCallback, useEffect } from "react";
import { ModalDialog } from "./components/modalDialog/ModalDialog";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { IDoughConfig } from "./model/IDoughConfig";
import { DashboardPage } from "./pages/DashboardPage";
import { CalculatorWithPreDough } from "./services/calculator/calculatorWithPreDough/CalculatorWithPreDough";
import { CalculatorWithoutPreDough } from "./services/calculator/calculatorWithoutPreDough/CalculatorWithoutPreDough";
import { IModalDialogConfig } from "./types/IModalDialogConfig";
import { IRecipeWithPreDough } from "./types/IRecipeWithPreDough";
import { IRecipeWithoutPreDough } from "./types/IRecipeWithoutPreDough";
import { readDoughConfig } from "./utils/readDoughConfig";
import { writeDoughConfig } from "./utils/writeDoughConfig";

const App: React.FC = () => {
  const modalDialogConfig = useValue<IModalDialogConfig>({ show: false });
  const doughConfig = useValue<IDoughConfig>(readDoughConfig());

  const recipeWithoutPreDough = useValue<IRecipeWithoutPreDough>({
    flour: 0,
    honey: 0,
    salt: 0,
    water: 0,
    yeast: 0,
  });

  const recipeWithPreDough = useValue<IRecipeWithPreDough>({
    dough: { flour: 0, salt: 0, water: 0 },
    preDough: { flour: 0, honey: 0, water: 0, yeast: 0 },
  });

  // Function to recalculate values. It always runs, whenever the dough config changed

  const reCalcRecipe = useCallback(() => {
    if (doughConfig.value.usePreDough) {
      const recipe = CalculatorWithPreDough.calc(doughConfig.value);
      recipeWithPreDough.setValue(recipe);
    } else {
      const recipe = CalculatorWithoutPreDough.calc(doughConfig.value);
      recipeWithoutPreDough.setValue(recipe);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doughConfig.value]);

  // Recalculate values initially
  useEffect(() => {
    reCalcRecipe();
  }, [reCalcRecipe]);

  // Save dough configuration on each change
  useEffect(() => writeDoughConfig(doughConfig.value), [doughConfig.value]);

  const onCloseModalDialog = () =>
    modalDialogConfig.setValue({ show: false, component: undefined });

  return (
    <AppContext.Provider
      value={{
        doughConfig,
        modalDialogConfig,
        recipeWithPreDough,
        recipeWithoutPreDough,
      }}
    >
      {modalDialogConfig.value.show && (
        <ModalDialog
          {...modalDialogConfig.value}
          onClose={onCloseModalDialog}
        />
      )}
      <DashboardPage />
    </AppContext.Provider>
  );
};

export default App;
