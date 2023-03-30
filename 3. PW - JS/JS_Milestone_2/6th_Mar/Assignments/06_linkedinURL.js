const pattern = /^(https:\/\/www.linkedin.com\/in\/)[\w\d-_]{4,29}[a-zA-Z\d]$/

const input = `https://www.linkedin.com/in/sounak-saha-0566351b7`
const input2 = `https://www.linkedin.com/in/Anka`

function isValidLinkedInProfile(str) {
    if(pattern.test(str)) {
        console.log(`\`${str}\` is a Valid URL\n`)
    } else {
        console.log(`\`${str}\` is an Invalid URL\n`)
    }
}

isValidLinkedInProfile(input)
isValidLinkedInProfile(input2)