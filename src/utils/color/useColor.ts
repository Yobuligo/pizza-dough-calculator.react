import { ColorType } from "./ColorType";
import { mapColorTypeToTypeScriptColor } from "./mapColorTypeToTypeScriptColor";

export const useColor = (colorType: ColorType | string): string => {
  let requestedColor = "";
  switch (typeof colorType) {
    case "number":
      requestedColor = mapColorTypeToTypeScriptColor(colorType);
      break;
    case "string":
      requestedColor = colorType;
  }

  return getComputedStyle(document.body).getPropertyValue(requestedColor);
};
