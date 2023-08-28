export interface IRecipeWithPreDough {
  preDough: {
    flour: number;
    honey: number;
    water: number;
    yeast: number;
  };
  dough: {
    flour: number;
    salt: number;
    water: number;
  };
}
