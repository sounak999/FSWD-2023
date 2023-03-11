// for loops

// for(init; condition; changer) {
// code we want to iterate
// }

// for (let index = 0; index < 5; index++) {
//     console.log(`Index value is ${index}`);
// }

// for (let index = 0; index < 5; index++) {
//     console.log(`${index} * ${index} = ${index * index}`);
// }

const heros = ['superman', 'spider-man', 'flash', 'thor', 'hulk']

// for (let index = 0; index < heros.length; index++) {
//     const element = heros[index];
//     console.log(`Hero is ${element}`);
// }

const anotherHeros = []
for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    anotherHeros.push(element.toUpperCase())
}
console.log(anotherHeros);


// while loop

// init
let i = 0
// condition inside while
while (i < 5) {
    console.log(i);
    // changer
    i = i + 1
}

// do while loop

//init
let j = 0
do {
    console.log(j);
    // changer
    j++;
} while (j < 5); // condition outside do-while


for (const element of heros) {
    console.log(`for of loop ==> ${element}`);
}

// break 
// continue

for (let index = 0; index < heros.length; index++) {
    if (index == 2) {
        // break
        continue
    }

    const element = heros[index];
    console.log(`hero @ index ${index} is ${element}`);
}