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
const fillPath = (object: object, path: string) => {
  const prefix = path ? `${path}.` : "";
  for (const propName in object) {
    const prop = (object as any)[propName];
    if (typeof prop !== "object") {
      (object as any)[propName] = `${prefix}${propName}`;
    } else {
      const prefixSubObject = prefix ? `${prefix}${propName}` : propName;
      (object as any)[propName] = fillPath(
        (object as any)[propName],
        prefixSubObject
      );
    }
  }
  return object;
};

const createTextObject = () => {
  const texts = { ...translations["en"] };
  fillPath(texts, "");
  return texts;
};

export const texts = createTextObject();
