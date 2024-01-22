import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue.js";

describe("Given function sumNumbersFromInitialValue...", () => {
  test(
    "When array of numbers is entered." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const NUMBERS = [1, 2, 3, 4, 5];
      const initalNumberOne = 0;
      const initialNumberTwo = 10;
      const expectedOne = 15;
      const expectedTwo = 25;
      //Act
      const resultOne = sumNumbersFromInitialValue(NUMBERS, initalNumberOne);
      const resultTwo = sumNumbersFromInitialValue(NUMBERS, initialNumberTwo);
      //Assert
      expect(resultOne).toBeDefined();
      expect(resultTwo).toBeDefined();

      expect(resultOne).toEqual(expectedOne);
      expect(resultTwo).toEqual(expectedTwo);
    },
  );
});
