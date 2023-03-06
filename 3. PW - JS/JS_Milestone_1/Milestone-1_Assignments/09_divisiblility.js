let arr = [2, 9, 4, 12, 5, 6, 27, 33];

arr = arr.filter((value) =>
    (value % 2 != 0 && value % 3 == 0)
);

console.log(arr);