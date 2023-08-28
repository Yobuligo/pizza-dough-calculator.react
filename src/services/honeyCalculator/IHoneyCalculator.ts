export interface IHoneyCalculator {
  /**
   * Calculates the amount of honey depending on the given flour
   * @param flour in grams
   */
  calc(flour: number): number;
}
