function returnDummyPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`timer completed`)
            resolve('done')
        }, 2000);
    })
}

async function consume() {
    try {
        console.log('start')
        const response = await returnDummyPromise()
        const response2 = await returnDummyPromise()
        const response3 = await returnDummyPromise()
        console.log(`response message is ---> ${response}`)
    } catch (err) {
        console.log(err);
    }
}

consume()
console.log(`end`);