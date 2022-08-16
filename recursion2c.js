// function countVowels(strg){
//     let strg_arr = strg.split('')
//     let vowel_sum = [];
//     for(i=0; i<=strg_arr.length -1 ; i++){
        
//         if(v == "a" || v == "e" || v == "i" || v == "o" || v == "u" || v == "y") {
//             vowel_arr = strg_arr.push(v) ;
//             console.log(vowel_arr)
//         }
//         console.log(vowel_sum)
//         return vowel_sum
//     }
//  }

// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.


// make an array, call array as it gets shorter recursively

function findVowel(v) {
    return (v == "a" || v == "e" || v == "i" || v == "o" || v == "u" || v == "y")
}

function countVowels(strg) {
    let strg_array = strg.toLowerCase().split('')
    
    let vowelCnt = (strg_array.filter(findVowel)).length;
    console.log(vowelCnt)
    return vowelCnt

}

let str1 = 'Four scOre and sEvEn years'
console.log(countVowels(str1))

// "a" || "e" || "i" || "o" || "u" || "y"