let pricesInDollars = {
    pens: 1,
    choco: 2,
    movieTickets: 10,
    juice: 8,
    jewellary: 150
}

let newObjInRupees = new Object()
// console.log(Object.keys(pricesInDollars));

Object.keys(pricesInDollars).map((val) => {
    newObjInRupees[val] = pricesInDollars[val] * 80
})

console.log(newObjInRupees);