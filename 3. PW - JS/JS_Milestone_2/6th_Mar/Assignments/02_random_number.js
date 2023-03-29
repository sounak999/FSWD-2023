let delayInSeconds = 3

// initializing the timer
console.log(`time left ${delayInSeconds}s ...`);
delayInSeconds--;

// this starts after spending 1 second
const intervalID = setInterval(() => {
    if (delayInSeconds > 0) {
        console.log(`time left ${delayInSeconds--}s ...`);
    } else {
        console.log(Math.floor(Math.random()*10));
        clearInterval(intervalID)
    }
}, 1000);
