class Product {

    // Javascript doesn't have constructor overloading
    
    // constructor() {
    //     console.log(`can we have multiple constructor?`);
    // }

    #rating;
    #name;
    discount;
    description = "custom";
    constructor(n, p, d) {
        console.log(`constructor called`);
        // console.log(this);
        // we need to use # to assign values in the private members
        this.#name = n;
        this.price = p;
        this.discount = d;
        this.#rating = '0xd'
        // console.log(this);
    }

    static customMethod() {
        console.log('This is static method statement');
    }

    display() {
        console.log("Name of the product ", this.name, " and price is ", this.price);
    }

    discountedPrice() {
        let newPrice = this.price * (Math.floor(100 - this.discount) / 100);
        return newPrice;
    }
}

const ipun = new Product('iPhone', 100000, 10);
const samsun = new Product('Samsung s23', 60000, 0);
console.log(ipun);
console.log(samsun);
console.log(ipun.discountedPrice());
console.log(samsun.discountedPrice());
Product.customMethod();

// updating some value
ipun.name = 'EyePhone'
console.log(ipun);

// console.log(ipun.price)
// console.log(ipun.rating);

ipun.display();