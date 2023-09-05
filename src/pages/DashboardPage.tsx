import { DoughConfigurationList } from "../features/doughConfiguration/DoughConfigurationList";
import { IngredientList } from "../features/ingredient/ingredientList/IngredientList";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <IngredientList />
      <DoughConfigurationList />
    </>
  );
};
