import { useMemo } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { IParameter } from "../model/IParameter";
import { UnitType } from "../types/UnitType";
import { ParameterList } from "./parameterList/ParameterList";
import { TotalMass } from "./result/totalMass/TotalMass";
import { ResultList } from "./result/resultList/ResultList";

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
      {
        id: "2",
        title: t.parameters.weightOfDoughPiece,
        unit: UnitType.GRAMS,
        value: 0,
      },
      {
        id: "3",
        title: t.parameters.hydration,
        unit: UnitType.PERCENT,
        value: 0,
      },
      {
        id: "4",
        title: t.parameters.salt,
        unit: UnitType.PERCENT,
        value: 0,
      },
      {
        id: "5",
        title: t.parameters.amountPreDough,
        unit: UnitType.PERCENT,
        value: 0,
      },
    ];
  }, [t.parameters.numberOfPizzas]);

  return (
    <>
      <TotalMass weight={2500}/>
      <ResultList parameters={parameters}/>
      <ParameterList parameters={parameters} />
    </>
  );
};
