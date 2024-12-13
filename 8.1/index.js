const countVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return word.toLowerCase()
            .split('')
            .filter(letter => vowels.includes(letter))
            .length
    };

const word = 'JavaScript';
const vowelCount = countVowels(word);
console.log(vowelCount);