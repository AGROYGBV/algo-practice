let sum = 0;
var firstTerm = 0;
var secondTerm = 1;
while (firstTerm + secondTerm <= 4000000) {
  thirdTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = thirdTerm;
  if (thirdTerm % 2 == 0) {
    sum += thirdTerm;
  }
}
console.log(sum);
