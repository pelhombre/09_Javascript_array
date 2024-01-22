/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

export const getWordFromValues = (values) => {
  const stringifiedValues = values.reduce((accumulator, value, index) => {
    return `${accumulator}${value}`;
  }, "");
  return stringifiedValues;
};
