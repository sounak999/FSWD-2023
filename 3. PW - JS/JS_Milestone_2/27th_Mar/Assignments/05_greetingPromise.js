function greet(name) {
    return new Promise(resolve => {
        const greeting = `Hello, ${name}!`
        resolve(greeting)
    })
}

greet('Sounak').then(value => console.log(value))