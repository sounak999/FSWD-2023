function calSquare(x = 2) {
    return x*x;
}
// default parameter value is 2
console.log(calSquare());
console.log(calSquare(4));


// default parameters should be placed from right to left
function multiply(x, y = 2) {
    return x * y;
}
console.log(multiply(9))
console.log(multiply(9, 3))

function addElements([n1, n2, n3]) {
    return n1 + n2 + n3;
}

let arr = [1, 2, 3];
console.log(addElements(arr));
arr = [1, 2, 3, 4]
console.log(addElements(arr));


//unlimited number of parameters
function sumOfAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumOfAll(1, 2, 33, 4, 5, 6));