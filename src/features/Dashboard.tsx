import { useMemo } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { IParameter } from "../model/IParameter";
import { UnitType } from "../types/UnitType";
import { ParameterList } from "./parameterList/ParameterList";
import { Result } from "./result/result/Result";

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
        value: 10000,
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
        value: 1000,
      },
    ];
  }, [t.parameters.numberOfPizzas]);

  const resultParameters = useMemo((): IParameter<any>[] => {
    return [
      {
        id: "1",
        title: t.result.flour,
        unit: UnitType.GRAMS,
        value: 0,
      },
      {
        id: "2",
        title: t.result.water,
        unit: UnitType.GRAMS,
        value: 0,
      },
      {
        id: "3",
        title: t.result.salt,
        unit: UnitType.GRAMS,
        value: 0,
      },
      {
        id: "4",
        title: t.result.honey,
        unit: UnitType.GRAMS,
        value: 0,
      },      
    ];
  }, [t.parameters.numberOfPizzas]);

  return (
    <>
      <Result parameters={resultParameters} />
      <ParameterList parameters={parameters} />
    </>
  );
};
