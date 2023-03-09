// example one 
const powerTwo = (n) => {
    return n ** 2
}

const powerThree = (powerTwo, n) => {
    return powerTwo(n) * n
}

console.log(powerThree(powerTwo, 3));


// example two
function sayHello() {
    return () => {
        console.log(`Hello Sounak`);
    }
}

let guessValue = sayHello();
console.log(guessValue);

// example three
const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(3)(4)(5));


// sum of array
const myNums = [1, 2, 3, 4, 5];
const sumOfArray = (arr) => {
    let total = 0
    // hof
    arr.forEach(function (element) {
        total += element
    });

    return total
}

console.log(`sum of array ${sumOfArray(myNums)}`);

// setInterval
function displayHello() {
    console.log(`Hola ji !`);
}

// setInterval(displayHello, 1000)
setTimeout(displayHello, 2000)