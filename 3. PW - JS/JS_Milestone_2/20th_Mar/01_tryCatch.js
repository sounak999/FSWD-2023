// function isEvenOrOdd(x) {
//     try {
//         if (x%2 == 0) {
//             console.log("Even");
//         } else {
//             console.lo("Odd");
//         }
//         console.log("Ending");
//     } catch {
//         console.log("exception handled");
//     } finally {
//         console.log('This will always be executed');
//     }
// }

// isEvenOrOdd(11);
// console.log("Stop");

/*************  Try Catch ***************/

function isPrime(y) {
    try {
        // console.lo('run time executions');
        for (let i = 2; i <= (y-1); i++) {
            if ((y%i) == 0) {
                // return 'not prime'
                // throw new Error("Not a Prime")
                throw "Not a Prime"
            }
        }
        return 'prime'
    } catch(err) {
        console.log('exception handled\n', err)
    } finally {
        console.log("End");
    }
}

isPrime(10)

// NB: try catch block handles runtime exceptions