export interface IYeastCalculator {
  /**
   * Calculates the amount of yeast depending on the amount of flour.
   * @param yeastType
   * @param flour
   */
  calc(flour: number): number;
}
