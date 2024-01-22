import { getEvensOnly } from "./getEvensOnly.js";

describe("Given function getEvensOnly...", () => {
  test(
    "When array of counters is entered." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const expected = [2, 12, 42, 28];
      //Act
      const result = getEvensOnly(expected);
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(expected);
    },
  );
});
