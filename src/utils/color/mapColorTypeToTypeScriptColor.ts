import { NotSupportedError } from "../../errors/NotSupportedError";
import { ColorType } from "./ColorType";

export const mapColorTypeToTypeScriptColor = (colorType: ColorType): string => {
  switch (colorType) {
    case ColorType.PRIMARY:
      return "--primary_500";
    case ColorType.SECONDARY:
      return "--primary_900";
    case ColorType.ACCENT:
      return "--neutral_900";
    case ColorType.LIGHT:
      return "--primary_100";
    default:
      throw new NotSupportedError(
        `There is no mapping for the ColorType ${colorType}. Please add the color type to the toTypeScriptColor-mapper.`
      );
  }
};
