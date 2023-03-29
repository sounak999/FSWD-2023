fetch('https://type.fit/api/quotes')
.then(function exec(response) {
    return response.json();
})
.then(function exec(data) {
    console.log(data);
})