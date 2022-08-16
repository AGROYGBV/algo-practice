// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.


function sumNums(num) {
    let sum = 0
    for(i=0; i<=num; i++){
        // console.log(i)
        sum += i;
        console.log(sum)
    }
    
    return sum;
    
}

 // => 6 (3 + 2 + 1)
 sumNums(3)
// console.log(sumNums(3));

