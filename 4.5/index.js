function totalSum(priceItem, amountItem, discountItem) {
    return priceItem * amountItem * (1 - discountItem / 100)
}

console.log(totalSum(25000, 3, 20))