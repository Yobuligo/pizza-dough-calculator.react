import { useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { DashboardPage } from "./pages/DashboardPage";
import { CalculatorWithPreDough } from "./services/calculator/calculatorWithPreDough/CalculatorWithPreDough";
import { CalculatorWithoutPreDough } from "./services/calculator/calculatorWithoutPreDough/CalculatorWithoutPreDough";
import { IDoughConfig } from "./types/IDoughConfig";
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

  const recipeWithPreDough = useValue<IRecipeWithoutPreDough>({
    flour: 0,
    honey: 0,
    salt: 0,
    water: 0,
    yeast: 0,
  });

  useEffect(() => {
    if (doughConfig.value.usePreDough) {
      CalculatorWithPreDough.calc(doughConfig.value);
    } else {
      CalculatorWithoutPreDough.calc(doughConfig.value);
    }
  }, [doughConfig.value]);

  return (
    <AppContext.Provider
      value={{ doughConfig, recipeWithPreDough, recipeWithoutPreDough }}
    >
      <DashboardPage />
    </AppContext.Provider>
  );
};

export default App;
