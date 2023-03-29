function timeConsumingTask() {
    for (let i = 1; i < 10000000000; i++) {
        // some task
    }
}

// JS native code
console.log('start')
timeConsumingTask();

console.log('timer started')
// not native (this will wait in the Callback Queue/ Macrotask Queue)
setTimeout(() => console.log('timer completed'), 0)
console.log('timer ended')

timeConsumingTask();
console.log('end');