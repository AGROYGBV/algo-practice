function sum_multiples_of_3_or_5(range) {
    range = [...Array(range).keys()]

    let result = range.reduce(multiples);

    function multiples(total, num) {
        if (num%3==0 || num%5==0) {
            total += num
        }

        return total
    }
    console.log(result)
}

sum_multiples_of_3_or_5(10)
sum_multiples_of_3_or_5(20)
sum_multiples_of_3_or_5(1000)