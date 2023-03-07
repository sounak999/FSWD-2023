const rentalPrice = (days, carType) => {
    switch (carType) {
        case "Economy":
            return days * 4000;
        case "Midsize":
            return days * 10000;
        case "Luxury":
            return days * 20000;

        default:
            return `Please provide correct car type!`;
    }
}

console.log(rentalPrice(23, "Luxury"));