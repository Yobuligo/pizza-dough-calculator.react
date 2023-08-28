import { DoughConfigDefault } from "../model/DoughConfigDefault";
import { IDoughConfig } from "../model/IDoughConfig";
import { readLocalStorage } from "./readLocalStorage";

export const readDoughConfig = (): IDoughConfig => {
  return readLocalStorage("doughConfig") ?? DoughConfigDefault;
};
