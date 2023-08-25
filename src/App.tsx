import { AppContext } from "./context/AppContext";
import { useValue } from "./hooks/useValue";
import { DashboardPage } from "./pages/DashboardPage";

const App: React.FC = () => {
  return (
    <AppContext.Provider
      value={{
        numberOfPizzas: useValue(0),
        weightOfDoughPiece: useValue(0),
        hydration: useValue(0),
        salt: useValue(0),
        amountPreDough: useValue(0),
      }}
    >
      <DashboardPage />
    </AppContext.Provider>
  );
};

export default App;
