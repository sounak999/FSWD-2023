function add(x, y) {
    return x + y;
}

// anonymous function expression
let addTwoNumbers = function (num1, num2) {
    return num1 + num2;
}

// named function expression
let addTwoNumbersAgain = function eval(a, b) {
    return a + b;
}

console.log(add(2, 3));
console.log(addTwoNumbers(5, 7));
console.log(addTwoNumbersAgain(9, 5));

// self-invoking functions
(function eval(org){
    console.log('Welcome to ' + org);
})('PW Skills');
