const products = ["Мышка", "Клавиатура", "Наушники"];
const newProducts = ["Монитор", "Принтер", "Флешка"];
const productsListEl = document.querySelector('.products')

for (const product of newProducts) {
    products.push(product)
}

for (const product of products) {
    newEl = document.createElement('li')
    newEl.textContent = product
    productsListEl.append(newEl)
}