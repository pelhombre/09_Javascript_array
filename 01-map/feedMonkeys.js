/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

const feedMonkeysMap = function (fruit) {
  const Monkeys = MONKEYS.map((monkey) => {
    const feedMonkey = `${monkey} ${fruit}`;

    return feedMonkey;
  });
  return Monkeys;
};

export default feedMonkeysMap;
