import { Header } from "../components/header/Header";
import { Icon } from "../components/icon/Icon";
import { Toolbar } from "../components/toolbar/Toolbar";
import { DoughConfigurationList } from "../features/doughConfiguration/DoughConfigurationList";
import { IngredientList } from "../features/ingredient/ingredientList/IngredientList";
import { IconType } from "../types/IconType";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <Header>
        <Toolbar>
          <Icon iconType={IconType.MENU} />
        </Toolbar>
      </Header>
      <IngredientList />
      <DoughConfigurationList />
    </>
  );
};
