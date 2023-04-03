const input = [2, 4, 1, 6, 9, 1]

const minAndMax = (arr) => {
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    return {min: min, max: max}
}

console.log(minAndMax(input));
