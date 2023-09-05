import { SliderStepper } from "../components/slider/sliderStepper/SliderStepper";
import { DoughConfigurationList } from "../features/doughConfiguration/DoughConfigurationList";
import { IngredientList } from "../features/ingredient/ingredientList/IngredientList";

export const DashboardPage: React.FC = () => {
  return (
    <>
      <SliderStepper max={100} min={0} />
      <IngredientList />
      <DoughConfigurationList />
    </>
  );
};
