let itemsQuantity = [5, 2, 3, 22, 10];

itemsQuantity.forEach((value, idx, arr) =>
    arr[idx] = value * 2
)

console.log(itemsQuantity);