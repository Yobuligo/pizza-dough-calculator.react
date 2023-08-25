import { useMemo } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { IParameter } from "../model/IParameter";
import { UnitType } from "../types/UnitType";
import { ParameterList } from "./parameterList/ParameterList";

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const parameters = useMemo((): IParameter<any>[] => {
    return [
      {
        id: "1",
        title: t.parameters.numberOfPizzas,
        unit: UnitType.AMOUNT,
        value: 0,
      },
    ];
  }, []);

  return (
    <>
      <ParameterList parameters={parameters} />
    </>
  );
};
