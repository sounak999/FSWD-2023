function logString(str) {
    console.log(`The manipulated string is: ${str}`);
}

function manipulateString(str, logString) {
    str = str.toUpperCase()
    logString(str)
}

manipulateString("hello, world!", logString)