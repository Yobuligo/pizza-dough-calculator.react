import { useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { DashboardPage } from "./pages/DashboardPage";
import { CalculatorWithPreDough } from "./services/calculator/calculatorWithPreDough/CalculatorWithPreDough";
import { CalculatorWithoutPreDough } from "./services/calculator/calculatorWithoutPreDough/CalculatorWithoutPreDough";
import { IDoughConfig } from "./types/IDoughConfig";
import { IRecipeWithPreDough } from "./types/IRecipeWithPreDough";
import { IRecipeWithoutPreDough } from "./types/IRecipeWithoutPreDough";
import { RisingTimeType } from "./types/RisingTimeType";
import { YeastType } from "./types/YeastType";

const App: React.FC = () => {
  const doughConfig = useValue<IDoughConfig>({
    hydration: 0,
    numberOfPizzas: 0,
    percentPreDough: 0,
    risingTime: RisingTimeType.LONG,
    salt: 0,
    usePreDough: false,
    weightOfDoughPiece: 0,
    yeastType: YeastType.FRESH,
  });

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

  useEffect(() => {
    if (doughConfig.value.usePreDough) {
      const recipe = CalculatorWithPreDough.calc(doughConfig.value);
      recipeWithPreDough.setValue(recipe);
    } else {
      const recipe = CalculatorWithoutPreDough.calc(doughConfig.value);
      recipeWithoutPreDough.setValue(recipe);
    }
  }, [doughConfig.value, recipeWithPreDough, recipeWithoutPreDough]);

  return (
    <AppContext.Provider
      value={{ doughConfig, recipeWithPreDough, recipeWithoutPreDough }}
    >
      <DashboardPage />
    </AppContext.Provider>
  );
};

export default App;
