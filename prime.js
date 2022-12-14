// S -
 // What is the largest prime factor of the number 600851475143? 
 // is it a factor of x?
 // is it prime? - divisible only by 1/self
 // needs the largest of the prime factors
 // is not divisible by 2, 5
 // if 600851475143 % factor_x = 0, then is a factor
 // the square root of a prime number is always irrational
 // outside of 2, there is no prime number divisible by 2 - 2 is the only even prime number
// E - 
    // The prime factors of 13195 are 5, 7, 13 and 29
// A -
// T - 

function prime(number) {
    let factors = [];
    for (let x = 1; x <= number; x++) {
      if (number % x == 0 && Math.sqrt(x) != 0) {
        factors.push(x);
      }
    }
    return factors;
  }
console.log(`prime ${prime(13195)}`);
  