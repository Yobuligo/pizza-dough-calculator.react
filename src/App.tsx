import { useCallback, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { IDoughConfig } from "./model/IDoughConfig";
import { DashboardPage } from "./pages/DashboardPage";
import { CalculatorWithPreDough } from "./services/calculator/calculatorWithPreDough/CalculatorWithPreDough";
import { CalculatorWithoutPreDough } from "./services/calculator/calculatorWithoutPreDough/CalculatorWithoutPreDough";
import { IRecipeWithPreDough } from "./types/IRecipeWithPreDough";
import { IRecipeWithoutPreDough } from "./types/IRecipeWithoutPreDough";
import { readDoughConfig } from "./utils/readDoughConfig";
import { writeDoughConfig } from "./utils/writeDoughConfig";

const App: React.FC = () => {
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

  return (
    <AppContext.Provider
      value={{ doughConfig, recipeWithPreDough, recipeWithoutPreDough }}
    >
      <DashboardPage />
    </AppContext.Provider>
  );
};

export default App;
