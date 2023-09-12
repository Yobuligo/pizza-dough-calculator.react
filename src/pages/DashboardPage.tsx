import { Header } from "../components/header/Header";
import { Toolbar } from "../components/toolbar/Toolbar";
import { DoughConfigurationList } from "../features/doughConfiguration/DoughConfigurationList";
import { IngredientList } from "../features/ingredient/ingredientList/IngredientList";
import { SettingsIcon } from "../features/settings/SettingsIcon";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <Header>
        <Toolbar>
          <SettingsIcon />
        </Toolbar>
      </Header>
      <IngredientList />
      <DoughConfigurationList />
    </>
  );
};
