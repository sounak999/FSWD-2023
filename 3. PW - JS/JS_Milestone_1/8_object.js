let obj = {
    name: 'Sounak',
    age: 21,
    salary: 1000
};

console.log(obj);
obj.gender = 'M';
console.log(obj);

let obj2 = new Object();
console.log("\n\n", obj2); // empty object
obj2.name = 'Ankana';
obj2['gender'] = 'F';
console.log(obj2);

// create object using functions

function Emp(id, name, desg) {
    this.Id = id;
    this.Name = name;
    this.jobRole = desg;
}

const empObj = new Emp(1, 'Bhombol', 'SDE');
console.log("\n\n", empObj);
console.log(empObj.Name);
console.log(empObj['jobRole']);
delete empObj.Id;
console.log(empObj);