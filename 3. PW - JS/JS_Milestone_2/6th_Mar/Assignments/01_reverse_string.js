const input = 'JavaScript'

const reverseString = (str) => {
    return str.split("").reverse().join("");
}

console.log('Reversing the string...');
setTimeout(() => {
    console.log(reverseString(input));
}, 2000);