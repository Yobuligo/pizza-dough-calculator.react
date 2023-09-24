import { NotSupportedError } from "../../errors/NotSupportedError";
import { LanguageType } from "../../types/LanguageType";
import { Language } from "../../utils/Language";

describe("Language", () => {
  describe("findLanguage", () => {
    it("returns all languages", () => {
      const languages = Language.findLanguages();
      expect(languages.length).toBe(2);
    });

    it("returns Deutsch", () => {
      const languages = Language.findLanguages();
      expect(languages[0].key).toBe("DE");
      expect(languages[0].title).toBe("Deutsch");
    });

    it("returns English", () => {
      const languages = Language.findLanguages();
      expect(languages[1].key).toBe("EN");
      expect(languages[1].title).toBe("English");
    });
  });

  describe("getIndexOfLanguageType", () => {
    it("returns 0 for Deutsch", () => {
      expect(Language.getIndexOfLanguageType(LanguageType.DE)).toBe(0);
    });

    it("returns 1 for English", () => {
      expect(Language.getIndexOfLanguageType(LanguageType.EN)).toBe(1);
    });

    it("throws an exception for an unknown language type", () => {
      expect(() => Language.getIndexOfLanguageType("123" as any)).toThrowError(
        NotSupportedError
      );
    });
  });
});
