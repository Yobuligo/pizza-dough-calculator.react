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
});
