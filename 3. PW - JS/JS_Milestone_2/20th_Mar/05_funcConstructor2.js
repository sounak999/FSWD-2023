// Arrow function expressions can't be used for creating function constructors

// const Product = (n, p) => {
//     this.name = n
//     this.price = p
// }

const Product = function (n, p) {
    this.name = n
    this.price = p
}

const p = new Product('iPhone', 100000)
console.log(p);