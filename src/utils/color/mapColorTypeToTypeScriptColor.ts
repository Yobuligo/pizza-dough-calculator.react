import { ColorType } from "./ColorType";

export const mapColorTypeToTypeScriptColor = (colorType: ColorType): string => {
  switch (colorType) {
    case ColorType.PRIMARY:
      return "--primaryColor";
    case ColorType.SECONDARY:
      return "--secondaryColor";
    case ColorType.ACCENT:
      return "--accentColor";
    case ColorType.LIGHT:
      return "--light";
    default:
      throw new Error(
        `There is no mapping for the ColorType ${colorType}. Please add the color type to the toTypeScriptColor-mapper.`
      );
  }
};
