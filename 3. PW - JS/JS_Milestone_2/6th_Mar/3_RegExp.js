// RegExp Cheat Sheet Link --> https://regexr.com/

let pattern = 'pw'

let regExOne = new RegExp(pattern)

// (g -> global)
// (i -> case-insensitive search)
let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

// let regExThree = /pw/gi
let regExThree = /pw/g
// console.log(typeof regExThree);

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/hitesh%20choudhary"

const useableUrl = webUrl.replace(/%\d0/, '-')
console.log(useableUrl);
