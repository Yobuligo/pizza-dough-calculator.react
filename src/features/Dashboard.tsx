import { ToggleButton } from "../components/toggleButton/ToggleButton";
import { ToggleButtonGroup } from "../components/toggleButtonGroup/ToggleButtonGroup";
import { DoughConfigurationList } from "./doughConfiguration/DoughConfigurationList";
import { IngredientList } from "./ingredient/ingredientList/IngredientList";

export const Dashboard: React.FC = () => {
  return (
    <>
      {/* <Test /> */}
      <IngredientList />
      <DoughConfigurationList />
      <ToggleButtonGroup>
        <ToggleButton caption="First" />
        <ToggleButton caption="Second" />
        <ToggleButton caption="Third" />
      </ToggleButtonGroup>
    </>
  );
};
