import { LabeledInput } from "./components/LabeledInput";
import { AppContext } from "./context/AppContext";
import { useTranslation } from "./hooks/useTranslation";

const App: React.FC = () => {
  const 
  const { t } = useTranslation();

  return <AppContext.Provider value={{}}>{t.title}
  
    <LabeledInput label={t.parameters.amountPreDough} />
  </AppContext.Provider>;
};

export default App;
