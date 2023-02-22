let arr = [1, 2, 3, 4, 5];
console.log(arr);

let x = ["Sounak", 1, 2, 3, "Delhi", false, 2.3];
console.log(x);

// creating empty array of fixed size
let a = new Array(10);
console.log(a);

// accessing array elements (arrays are 0-based indexed)
let names = ["Sounak", "Ankan", "Subhash", "Naren", "Arijit"]
console.log(names);
console.log(names[2]);
console.log(names[23]); // not exist
console.log(a[0]);

// update
names[0] = 23;
names[2] = "Bose"
console.log(names);