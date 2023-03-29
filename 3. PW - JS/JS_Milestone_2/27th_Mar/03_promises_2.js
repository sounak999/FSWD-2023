function returnDummyPromise() {
    return new Promise(function exec(resolve, reject) {
        // write your code here...
        setTimeout(() => {
            console.log('timer completed');
            let num = Math.random()
            if (num > 0.5) {
                resolve('done ' + num);
            } else {
                reject('error ' + num)
            }
        }, 0);
    })
}

let p = returnDummyPromise();

// this is stored in the Microtask Queue
p
    .then(function exec(val) {
        // val is same as the parameter inside resolve function
        console.log(`promise resolved with value ${val}`);
    })
    .catch(function exec(err) {
        console.log(`promised rejected with message ${err}`);
    })
    .finally((val) => console.log(`will always execute this ${val}`))

// time consuming work
for (let i = 0; i < 1000000000; i++) { }
console.log('end')