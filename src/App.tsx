import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { DashboardPage } from "./pages/DashboardPage";
import { RisingTimeType } from "./types/RisingTimeType";
import { YeastType } from "./types/YeastType";

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        numberOfPizzas: useValue(0),
        weightOfDoughPiece: useValue(0),
        hydration: useValue(0),
        salt: useValue(0),
        usePreDough: useValue(false),
        amountPreDough: useValue(0),
        risingTimeType: useValue(RisingTimeType.LONG),
        yeastType: useValue(YeastType.DRY),
      }}
    >
      <DashboardPage />
    </AppContext.Provider>
  );
};

export default App;
