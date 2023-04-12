function getPerson(person) {
    try {

        if (typeof person !== "object" || !person.hasOwnProperty("name") || !person.hasOwnProperty("age")) {
            throw new Error("Invalid parameter type");
        }

        return `Name: ${person.name}, Age: ${person.age}`;

    } catch (e) {
        return e.message;
    }
}


console.log(getPerson({name: "Mithun", age: 20}))
console.log(getPerson({name: "Sounak"}))
console.log(getPerson(['name', 'Sounak']))