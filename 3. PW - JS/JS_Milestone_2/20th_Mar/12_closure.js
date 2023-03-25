let score = 0
function one() {
    let score = 1
    console.log(`Function one ${score}`);
}

function two() {
    let score = 100
    console.log(`Function two ${score}`);
}

function three() {
    let score = 3000
    console.log(`Function three ${score}`);
}

one();
two();
three();
console.log(score);

function outerFunc() {
    let outerValue = "I am outer value"
    function innerFunc() {
        let innerValue = "inner value"
        console.log(outerValue);
        console.log(innerValue);
        // console.log(innerInnerValue); // will give error

        function innerOfInnerFunc() {
            let innerInnerValue = "inner of inner value"
            console.log(innerValue);
            console.log(outerValue);
        }
        innerOfInnerFunc();
    }

    innerFunc()
}

outerFunc()

// example 2
const errorMessage = `This is an error message`

setTimeout(() => {
    console.log(errorMessage);
}, 2000);

// example 3
let viewCount = 0
const items = [2, 3, 5, 7]

items.forEach(function iterator(num) {
    viewCount++;
    console.log(num);
})

console.log(`total view count are ${viewCount}`);