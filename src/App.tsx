import { AppContext } from "./context/AppContext";
import { useTranslation } from "./hooks/useTranslation";

const App: React.FC = () => {
  const { t } = useTranslation();

  return <AppContext.Provider value={{}}>{t.title}</AppContext.Provider>;
};

export default App;
