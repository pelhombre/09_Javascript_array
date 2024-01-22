import { customersWhoBelongToMembership } from "./customersWhoBelongToMembership";

describe("Given function customersWhoBelongToMembership...", () => {
  test(
    "When array of members is entered." + "Then expected result should be returned",
    () => {
      //Arrange
      const expected = [
        { name: "Foo", member: true },
        { name: "Fizz", member: true },
        { name: "FizzBuzz", member: true },
      ];
      //Act
      const result = customersWhoBelongToMembership(expected);
      //Assert
      expect(result).toBeDefined();
      expect(result).toEqual(expected);
    },
  );
});
