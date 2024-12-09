let cartEl = document.querySelector('.cart')

function addToCart(itemName) {
    const newCartItem = document.createElement('li');
    newCartItem.textContent = itemName;
    cartEl.append(newCartItem);
}