import { Test } from "../test/Test";
import { DoughConfigurationList } from "./doughConfiguration/DoughConfigurationList";
import { IngredientList } from "./ingredient/ingredientList/IngredientList";

export const Dashboard: React.FC = () => {
  return (
    <>
      {/* <Test /> */}
      <IngredientList />
      <DoughConfigurationList />
    </>
  );
};
