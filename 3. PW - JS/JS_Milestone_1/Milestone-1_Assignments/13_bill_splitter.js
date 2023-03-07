const billSplitter = (costsOfDishes, noOfPeople) => {
    let totalBill = 0;

    for (let idx = 0; idx < costsOfDishes.length; idx++) {
        totalBill += (costsOfDishes[idx] * noOfPeople);
    }

    var obj = {
        "totalBill": totalBill,
        "eachPersonBill": totalBill/noOfPeople
    };

    return obj;
}

let costsOfDishes = [23, 34, 78, 89, 120];
console.log(billSplitter(costsOfDishes, 6));