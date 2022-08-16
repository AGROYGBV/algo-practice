// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.

 function countVowels(strg){

    let vowel_sum = strg.match(/[aeiouy]/gi).length;

    console.log(vowel_sum)
    return vowel_sum
 }

countVowels('Four scOre and sEvEn years')