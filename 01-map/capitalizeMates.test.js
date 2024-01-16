import { capitalizeMates } from "./capitalizeMates";

describe("Given function capitalizeMates...", () => {
  test("When array parameter has string not regularly capitalized.", () => {
    //Arrange
    const expected = ["John", "Jacob", "Jingleheimer", "Schmidt"];
    //Act
    const result = capitalizeMates();
    //Assert
    expect(result).toBeDefined();
    expect(result).toEqual(expected);
  });
});
