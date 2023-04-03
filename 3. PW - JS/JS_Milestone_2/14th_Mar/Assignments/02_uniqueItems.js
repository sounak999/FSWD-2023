let arr = [1, 2, 3, 2, 2, 1, 6, 7, 1, 7, 7, 7]

const uniqueElements = (arr) => {
    return new Set(arr)
}

console.log(uniqueElements(arr))