function myFirstFunction() {
    // all logic goes into this pair of curly braces
    console.log('This is');
    console.log('my first function');
    return ;
}

myFirstFunction();

function addFourNumbers(a, b, c, d) {
    let result = a + b + c + d;
    // console.log(result);
    return result
}

addFourNumbers(3, 1, 90, 2);

function isEvenOrOdd(x) {
    if (x%2 == 0) {
        console.log('Even Number')
    } else {
        console.log('Odd Number');
    }
}

isEvenOrOdd(12);
isEvenOrOdd(5);
let num = myFirstFunction();
console.log(num);
num = addFourNumbers(1, 2, 3, 4)
console.log(num);

function mySecondFunction() {
    return "Hi boy!"
}

str = mySecondFunction(23)
console.log(str);