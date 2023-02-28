let output = function () {
    console.log(`unnamed function`);
};

output();

// PS: arrow functions are also anonymous function

// IIFE (immediately invoked function expression)
(function (name) {
    console.log(`Greetings, ${name}!`);
})('Sounak');