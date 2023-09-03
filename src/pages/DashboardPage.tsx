import { DoughConfigurationList } from "../features/doughConfiguration/DoughConfigurationList";
import { IngredientList } from "../features/ingredient/ingredientList/IngredientList";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <input type="range" />
      <IngredientList />
      <DoughConfigurationList />
    </>
  );
};
