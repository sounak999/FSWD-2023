// forEach

let arr = [23, 54, 77, 89]
// arr.forEach(function (val, idx, array) {
    // console.log(`val -> ${val}, idx -> ${idx}, arr -> ${array}`)
// })

// arr.forEach((val, idx, array) => console.log(`arrow => value =${val}, index = ${idx}, array = ${array}`));

const heros = ['spidey', 'shaktiman', 'flash', 'batman', 'aquaman', 'superman']

// map (works same as forEach)

// heros.forEach(ele => console.log(ele.toUpperCase()))
// heros.map(ele => console.log(ele.toUpperCase()))


// filter (remember using 'return')
const herosWithMan = heros.filter(hero => {
    return hero.endsWith('man');
})
console.log(herosWithMan);

// reduce

const cartBill = [20, 30, 50]
const sumOfBills = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfBills)

// check if all the values are numbers
// every
const scores = [23, 89, 322, 250, 480];
console.log(typeof scores[0]);
let numCheck = scores.every(v => typeof v === 'number');
console.log(`check -> ${numCheck}`);

// find (greedy method)
// check if scores are above 200
const above200 = scores.find(score => score > 200)

// returns first element where it matches with the condition
console.log(above200);

// findIndex
// some
// sort