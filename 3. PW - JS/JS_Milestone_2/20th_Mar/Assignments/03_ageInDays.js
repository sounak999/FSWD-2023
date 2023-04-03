function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;

    return function logMessage() {
        console.log(`The person's full name is ${fullName} and his age in days is ${ageInDays}.`);
    };
}

const person = {
    firstName: 'Sounak',
    lastName: 'Saha',
    age: 22
};

const logMessage = ageInDays(person);
logMessage();
