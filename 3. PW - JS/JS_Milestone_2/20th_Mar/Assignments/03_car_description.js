class Car{
    #company;
    #model;
    #year;

    constructor(comapny, model, year) {
        this.#company = comapny
        this.#model = model
        this.#year = year
    }

    getDescription() {
        return `This is a ${this.#year} ${this.#company} ${this.#model}`
    }
}

let car1 = new Car('Toyota', 'Camry', 2022)
let car2 = new Car('Honda', 'Civic', 2021)
let car3 = new Car('Ford', 'Mustang', 2020)

console.log(car1.getDescription());
console.log(car2.getDescription());
console.log(car3.getDescription());