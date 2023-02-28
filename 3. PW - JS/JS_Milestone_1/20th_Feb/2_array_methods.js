let arr = [34, 54, 21, 90];
console.log(arr);

// push -> add element from last
arr.push(22);
arr.push(33);

console.log(arr);

// pop -> remove from last
arr.pop();
console.log(arr);

// shift -> remove from first
arr.shift();
console.log(arr);

arr.unshift(11);
console.log(arr);

// concat function
const a1 = [1, 2, 3, 4], a2 = [5, 6, 7, 8];
const res = a1.concat(a2);
console.log(a1, a2);
console.log(res);

// slice function --> [start, end)
arr = [23, 43, 12, "Sounak", 99];
let result = arr.slice(2, 4);
console.log(result);

// join function
let str = arr.join(); // by default, comma (,) is created
console.log(str);

str = arr.join(" ")
console.log(str);

// reverse
arr.reverse();
console.log(arr)

console.log(arr.indexOf(43));
console.log(arr.indexOf('Ankan'));

// splice method
// syntax --> array.splice(start, deletecount, item1, item2, item3, ...)
const removed = arr.splice(2, 3, '#', 33, '😁');
console.log('splice method --> ', arr, '\nWhat we removed -->', removed)
