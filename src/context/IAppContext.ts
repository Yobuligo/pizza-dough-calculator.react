import { IDoughConfig } from "../model/IDoughConfig";
import { IRecipeWithPreDough } from "../types/IRecipeWithPreDough";
import { IRecipeWithoutPreDough } from "../types/IRecipeWithoutPreDough";
import { IValue } from "../types/IValue";

export interface IAppContext {
  doughConfig: IValue<IDoughConfig>;
  recipeWithPreDough: IValue<IRecipeWithPreDough>;
  recipeWithoutPreDough: IValue<IRecipeWithoutPreDough>;
}
