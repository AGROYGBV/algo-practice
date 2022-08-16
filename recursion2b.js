function countVowels(strg) {
    let new_string = strg.toLowerCase()
    let count = 0;

    function findVowel(v) {
        return (v == "a" || v == "e" || v == "i" || v == "o" || v == "u" || v == "y")
    }

    for (var i = 0; i < new_string.length; i++) {
        if (findVowel(new_string[i])) {
            ++count;
        }
    }
    return count;
  }
  

console.log(countVowels('Four scOre and sEvEn years'))