class Employee {

    constructor(name, position, salary) {
        this.name = name
        this.position = position
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }
}

let e1 = new Employee('Sounak', 'SDE', 100000)
console.log(e1.getSalary())