// S - sum of multiples of 3 or 5 between 0 and 1000 non-inclusive

// E - sum of multiples of 3 or 5 below 10: [3, 5, 6, 9] = 23
// sum of multiples of 3 or 5 below 20: [3, 5, 6, 9, 10, 12, 15, 18] sum = 78
// below10 = 3+5+6+9
// below20 = 3+5+6+9+10+12+15+18
// console.log("Below 10: ", below10)
// console.log("Below 20: ", below20)

function multiples_of_3_or_5(range) {
    //accumulator variable
    let sum = 0;
    for(let i=1; i<range; i++){
        //modulo operator returns 0 for multiples
        if(i%3==0 || i%5==0){
            sum += i;
        } 
    }
    return sum;
}

// function multiples_of_3_or_5(range) {
//     //accumulator variable
//     let sum = 0;
//     for(let i=3; i<range; i+=3){
//         //modulo operator returns 0 for multiples
//         if(i%3==0){
//             sum += i;
//         } 
//     }
//     for(let i=5; i<range; i+=5){
//         //modulo operator returns 0 for multiples
//         if(i%5==0 && i%3!==0){
//             sum += i;
//         } 
//     }
//     return sum;
// }



// below10 = multiples_of_3_or_5(10)
// console.log(`below 10: `, below10)

// below20 = multiples_of_3_or_5(20)
// console.log(`below 20: `, below20)

// below100 = multiples_of_3_or_5(100)
// console.log(`below 100: `, below100)

// below1000 = multiples_of_3_or_5(1000)
// console.log(`below 1000: `, below1000)

// A - Make a loop?