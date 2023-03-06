let vowelCount = (str) => {
    let cnt = 0;
    for (const itr of str) {
        if (itr === 'a' || itr === 'A') {
            cnt++;
        } else if (itr === 'e' || itr === 'E') {
            cnt++;
        } else if (itr === 'i' || itr === 'I') {
            cnt++;
        } else if (itr === 'o' || itr === 'O') {
            cnt++;
        } else if (itr === 'u' || itr === 'U') {
            cnt++;
        }
    }

    return `total vowel count is ${cnt}`
}

let str = "Sounak SAHA";
console.log(vowelCount(str));