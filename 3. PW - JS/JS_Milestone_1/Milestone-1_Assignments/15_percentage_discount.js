const percentageDiscount = (originalPrice, discountedPrice) => {
    const result = (discountedPrice/originalPrice)*100;
    return result.toFixed(2);
}

console.log(percentageDiscount(150, 20));