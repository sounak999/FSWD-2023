function convertToNumber(str) {

    try {
        let num = Number(str)
        
        if (isNaN(num)) {
            throw new Error('Invalid Number')
        }
        
        return num

    } catch (error) {
        
        return error.message
    }
}

console.log(convertToNumber('abc12'))
console.log(convertToNumber('1234'))
console.log(convertToNumber('abc'))