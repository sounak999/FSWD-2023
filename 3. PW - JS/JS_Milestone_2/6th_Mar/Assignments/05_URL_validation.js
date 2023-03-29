const pattern = /^https?:\/\/[\w\d-@%]+\.[a-zA-Z]+$/

const input = `http://sounak-saha-%999@gmail.com`
const input2 = `https://sounak777com`

function matchingOrNot(str) {
    if(pattern.test(str)) {
        console.log(`\`${str}\` is a Valid URL\n`)
    } else {
        console.log(`\`${str}\` is an Invalid URL\n`)
    }
}

matchingOrNot(input)
matchingOrNot(input2)