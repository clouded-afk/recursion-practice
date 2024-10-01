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


function recursionFibonacci(num) {
    if (num == 1) {
        return [0]
    } else if (num == 2){
        return [0, 1]
    }

    let array = recursionFibonacci(num - 1)
    array.push(array[array.length - 1] + array[array.length - 2])
    return array
}

console.log(recursionFibonacci(8))