import { isNotNull } from "../../utils/isNotNull";

describe("isNotNull", () => {
  let called = false;

  beforeEach(() => {
    called = false;
  });

  it("block is not called for null value", () => {
    isNotNull(undefined, () => {
      called = true;
    });
    expect(called).toBe(false);
  });

  it("block is called for not null value", () => {
    isNotNull("any value", () => {
      called = true;
    });
    expect(called).toBe(true);
  });

  it("block is called with correct value", () => {
    const expectedValue = 1234567890;
    let actualValue = 0;
    isNotNull(expectedValue, (value) => {
      actualValue = value;
    });
    expect(actualValue).toBe(expectedValue);
  });
});
