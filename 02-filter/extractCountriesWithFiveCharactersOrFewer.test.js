import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given function extractCountriesWithFiveCharactersOrFewer...", () => {
  test(
    "When array of countries is entered." +
      "Then expected result should be returned",
    () => {
      //Arrange
      const expected = ["Italy"];
      //Act
      const result = extractCountriesWithFiveCharactersOrFewer(expected);
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(expected);
    },
  );
});
