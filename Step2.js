const perf = require('execution-time')();
// 1) Sum Zero

let array1 = [28, 43, -12, 30, 4, 0, 12]
// let array2 = [0, 21, 33, 6, 0, -9]
// let array3 = [0, 1, 2, 3, 4, 5]

let sumZero = function(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = (i + 1); j < array.length; j++) {    
        if (i !== j) {    
          if (array[i] + array[j] === 0) {
            return true
          } 
            return false
          }
        }
    }
  }


console.log(sumZero(array1))

perf.start();
sumZero(array1);
let resultsArray1 = perf.stop();
console.log(resultsArray1.preciseWords)
// Runtime = 49.25 μs

// console.log(sumZero(array2))
// console.log(sumZero(array3))

// 2) Unique Characters

let hasUniqueChars = function(word) {
  let uniqueChars = new Set([])
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

console.log(hasUniqueChars('edrea'))

perf.start();
hasUniqueChars('edrea');
let resultsEdrea = perf.stop();
console.log(resultsEdrea.preciseWords)
// Runtime = 3.875 μs

// console.log(hasUniqueChars('Tyson'))

// 3) Pangram

let isPangram = function(sentence) {
  sentence = sentence.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < alphabet.length; i++) {
    let found = sentence.indexOf(alphabet[i])
    if (found == -1) return false
  }
  return true
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
// console.log(isPangram('Tyson Axl Shiva Arya and Issa'))

perf.start();
isPangram('The quick brown fox jumps over the lazy dog.');
let resultsPangram = perf.stop();
console.log(resultsPangram.preciseWords)
// Runtime = 3.667 μs

// 4) Longest Word

let arrayWords1 = ['frenchie', 'bully', 'bulldog', 'dog']
let arrayWords2 = ['cane', 'corso', 'mastiff', 'dog']

let longestWord = function(array) {
  let len = 0
  for (let i = 0; i < array.length; i ++) {
    if (array[i].length > len) {
      len = array[i].length
    }
  }
  return len
}

console.log(longestWord(arrayWords1))

perf.start();
longestWord(arrayWords1);
let resultsArrayWords = perf.stop();
console.log(resultsArrayWords.preciseWords)
// Runtime = 2.083 μs

// console.log(longestWord(arrayWords2))