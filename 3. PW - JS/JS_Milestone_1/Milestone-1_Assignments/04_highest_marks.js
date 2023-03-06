const marks = [56, 89, 21, 34, 91];
let highest = marks[0]

for (let i = 0; i < marks.length; i++) {
    (marks[i] > highest)? highest = marks[i]: (highest == marks[i]);
}

console.log(`highest marks is ${highest}`);