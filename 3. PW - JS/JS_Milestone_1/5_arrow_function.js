const square = x => x * x;
console.log(square(5));

const sumOfTwo = (x, y) => x + y;
console.log(sumOfTwo(2, 3));

const sum = (x, y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y;
};
console.log(sum(5, 6));

const sumAndDifference = (x, y) => ({sum: x + y, diff: x - y});
let output = sumAndDifference(7, 3);
console.log(output);
