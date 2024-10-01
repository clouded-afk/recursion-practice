// Fibonacci Sequence using iteration

function iterationFibonacci(num) {
    array = [0,1]

    for (i = 2; i < num; i++) {
        const previousNumber = array[i - 1]
        const currentNumber =  array[i - 2]

        array.push(previousNumber + currentNumber)
    }

    return array
}

console.log(iterationFibonacci(8))