let str = "sounak saha";

let result = (str.charAt(0) >= 'a' && str.charAt(0) <= 'z')? str.charAt(0).toUpperCase() + str.slice(1): str;

console.log(result);
