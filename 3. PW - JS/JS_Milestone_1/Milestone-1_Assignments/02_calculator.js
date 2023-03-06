let num1 = 23, num2 = 56;
let operator = "*";
let result = null;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(result);
        break;

    case "-":
        result = num1 - num2;
        console.log(result);
        break;

    case "*":
        result = num1 * num2;
        console.log(result);
        break;

    case "/":
        result = num1 / num2;
        console.log(result);
        break;

    default:
        console.log("Invalid operator");
        break;
}