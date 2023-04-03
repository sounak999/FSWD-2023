const person = {
    name: "Sherlock",
    age: 22,
    address: {
        street: "221 B, Baker Street",
        city: "London",
        country: "England"
    },
};

// function extractNameAndStreet({ name, address: { street } }) {
//     return { name, street };
// }

function extractNameAndStreet({name, address}) {
    const {street} = address;
    return {name, street};
}

const result = extractNameAndStreet(person);
console.log(result);