import { getWordFromValues } from "./getWordFromValues.js";

describe("Given function getWordFromValues...", () => {
  test(
    "When array of values is entered." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const VALUES = [1, 2, 3];
      const expected = "123";
      //Act
      const result = getWordFromValues(VALUES);
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(expected);
    },
  );
});
