import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "../hooks/useTranslation";
import { Parameter } from "./parameter/Parameter";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <>
      <Parameter
        label={t.parameters.numberOfPizzas}
        initialValue={context.numberOfPizzas.value}
      />
      <Parameter
        label={t.parameters.weightOfDoughPiece}
        initialValue={context.weightOfDoughPiece.value}
      />
      <Parameter
        label={t.parameters.hydration}
        initialValue={context.hydration.value}
      />

      <Parameter label={t.parameters.salt} initialValue={context.salt.value} />
      <Parameter
        label={t.parameters.amountPreDough}
        initialValue={context.amountPreDough.value}
      />
    </>
  );
};
