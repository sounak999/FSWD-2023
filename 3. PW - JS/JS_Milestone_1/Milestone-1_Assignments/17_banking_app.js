let userDetails = {
    "Name": "Sounak",
    "Balance": 1000
};

const depositMoney = (money) => {
    console.log(`Congrats! You've deposited Rs ${money}`);
    userDetails.Balance += money;
    return userDetails;
}

const withdrawMoney = (money) => {
    
    if (money > userDetails.Balance) {
        return `Your account has less money`;
    }
    
    userDetails.Balance -= money;
    console.log(`Congrats! Your account has debited Rs ${money}`);
    return userDetails;
}

console.log(depositMoney(500));
console.log(withdrawMoney(600));