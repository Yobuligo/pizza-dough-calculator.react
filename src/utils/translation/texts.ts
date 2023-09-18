import * as translations from "../../i18n";

/**
 * This function is responsible for setting the path for each text instead of having the text itself.
 * E.g.
 *    {
 *      settings: {
 *          title: "My title"
 *      }
 *    }
 *
 * becomes
 *    {
 *      settings: {
 *          title: "settings.title"
 *      }
 *    }
 */
const fillPath = (source: object, path: string) => {
  const prefix = path ? `${path}.` : "";
  const target = {};
  for (const propName in source) {
    const propValue = (source as any)[propName];
    if (typeof propValue !== "object") {
      (target as any)[propName] = `${prefix}${propName}`;
    } else {
      const prefixSubObject = prefix ? `${prefix}${propName}` : propName;
      (target as any)[propName] = fillPath(
        (source as any)[propName],
        prefixSubObject
      );
    }
  }
  return target;
};

const createTextObject = () => {
  const texts: (typeof translations)["en"] = fillPath(
    translations["en"],
    ""
  ) as any;
  return texts;
};

export const texts = createTextObject();
