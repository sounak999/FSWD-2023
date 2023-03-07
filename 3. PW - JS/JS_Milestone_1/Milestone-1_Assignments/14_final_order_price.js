const finalOrderPrice = (cart) => {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        let obj = cart[i];
        price += (obj["unit price"]*obj["quantity"]);
    }

    return price;
}

const cart = [
    {
        "unit price": 20,
        "quantity": 5
    },
    {
        "unit price": 50,
        "quantity": 2
    },
    {
        "unit price": 5,
        "quantity": 10
    }
]


console.log(finalOrderPrice(cart));