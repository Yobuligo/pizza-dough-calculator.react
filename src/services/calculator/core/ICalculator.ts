export interface ICalculator<TParameter, TResult> {
  calc(parameter: TParameter): TResult;
}
