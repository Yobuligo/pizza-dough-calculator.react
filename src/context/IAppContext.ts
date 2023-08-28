import { IDoughConfig } from "../types/IDoughConfig";
import { IRecipeWithoutPreDough } from "../types/IRecipeWithoutPreDough";
import { IValue } from "../types/IValue";

export interface IAppContext {
  doughConfig: IValue<IDoughConfig>;
  recipeWithPreDough: IValue<IRecipeWithoutPreDough>;
  recipeWithoutPreDough: IValue<IRecipeWithoutPreDough>;
}
