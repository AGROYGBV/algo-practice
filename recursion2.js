// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.


// make an array, call array as it gets shorter recursively


function findVowel(v) {
    v = v.toLowerCase()
    return (v == "a" || v == "e" || v == "i" || v == "o" || v == "u" || v == "y")
}

function countVowels(str, i) {
    if (i <= 0) { 
        return 0 
    } else {
        return countVowels(str, i-1) + findVowel(str[i-1])
    }
}

let str1 = 'Four scOre and sEvEn years'
console.log(countVowels(str1, str1.length))