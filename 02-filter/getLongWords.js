/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

const getLongWords = (words) => {
    const filterWords = (word) => {
        const isAllowed = word.lengh > 5;
        return isAllowed;
    }
    
    const longWords = words.filter(filterWords);
    return longWords;

}

console.log(getLongWords(LANGUAGES));
console.log(getLongWords(BEATLES));