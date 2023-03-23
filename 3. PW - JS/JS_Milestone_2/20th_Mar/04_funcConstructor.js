// without constructor

function Product(n, p) {
    this.name = n
    this.price = p

    // return only works for object type, otherwise it 
    // ignores other values and returns newly created object
    return {x: 10, y: 20}
}

const p = new Product('iPhone 14', 100000)
console.log(p);

// this keyword is different in js than other languages
// this refers to the context from where we call the function (except arrow functions)

