const inputString = 'total people are total genius although people are total good but not genius'

const wordCount = (str) => {
    const arr = str.split(' ')
    const map = new Map()

    arr.forEach(ele => {
        if (map.has(ele)) {
            let newVal = map.get(ele)
            map.set(ele, ++newVal)
        } else {
            map.set(ele, 1)
        }
    });

    console.log(map)
}

wordCount(inputString)