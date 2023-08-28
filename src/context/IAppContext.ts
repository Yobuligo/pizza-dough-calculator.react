import { IDoughConfig } from "../types/IDoughConfig";
import { IRecipe } from "../types/IRecipe";
import { IValue } from "../types/IValue";

export interface IAppContext {
  doughConfig: IValue<IDoughConfig>;
  recipeWithPreDough: IValue<IRecipe>;
  recipeWithoutPreDough: IValue<IRecipe>;
}
