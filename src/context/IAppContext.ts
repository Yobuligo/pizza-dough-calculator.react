import { IDoughConfig } from "../model/IDoughConfig";
import { IModalDialogConfig } from "../types/IModalDialogConfig";
import { IRecipeWithPreDough } from "../types/IRecipeWithPreDough";
import { IRecipeWithoutPreDough } from "../types/IRecipeWithoutPreDough";
import { IValue } from "../types/IValue";
import { LanguageType } from "../types/LanguageType";

export interface IAppContext {
  doughConfig: IValue<IDoughConfig>;
  language: IValue<LanguageType>;
  modalDialogConfig: IValue<IModalDialogConfig>;
  recipeWithPreDough: IValue<IRecipeWithPreDough>;
  recipeWithoutPreDough: IValue<IRecipeWithoutPreDough>;
}
