let emp = {
    name: 'Ankan',
    id: 1,
    age: 21,
    job: 'SDE'
};

// Object.keys()
const arrOfKeys = Object.keys(emp);
console.log(arrOfKeys);

// Object.values()
const arrOfValues = Object.values(emp);
console.log(arrOfValues);

// Object.entries()
const arrOfEntries = Object.entries(emp);
console.log(arrOfEntries);

// Object.freez() 
// can't create, delete or update the object properties
// Object.freeze(emp);

// Object.seal()
// can't create or delete but update the object properties
Object.seal(emp);
emp.favBook = 'Ray Stories';
delete emp.id;
emp.name = 'Sounak';
console.log(emp);

// Object.assign()

const copyObj = Object.assign({}, emp);
console.log(copyObj);

