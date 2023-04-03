const input = [2, 3, 1, 5, 8, 'sounak', 'js']

function randomElements(arr) {
    let [first, second, ...rest] = arr

    return [first, second, rest[rest.length - 1]]
}

console.log(randomElements(input));