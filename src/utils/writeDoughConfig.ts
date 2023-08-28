import { IDoughConfig } from "../model/IDoughConfig";
import { writeLocalStorage } from "./writeLocalStorage";

export const writeDoughConfig = (doughConfig: IDoughConfig) => {
  writeLocalStorage("doughConfig", doughConfig);
};
