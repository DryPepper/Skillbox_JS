const form = document.querySelector('.form')
const error = document.querySelector('.error')
const tableBody = document.querySelector('.product-table tbody')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const productName = document.querySelector('.name').value
    const productWeight = parseFloat(document.querySelector('.weight').value)
    const deliveryDistance = parseFloat(document.querySelector('.distance').value)

    if (productWeight <= 0 || deliveryDistance <= 0) {
        error.textContent = 'Пожалуйста, введите корректные значения для веса и расстояния'
        return
    }
    error.textContent = ''
    const deliveryCost = (productWeight * deliveryDistance) / 10
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productWeight}</td>
        <td>${deliveryDistance}</td>
        <td>${deliveryCost.toFixed(2)} руб.</td>
    `
    tableBody.appendChild(newRow)
    form.reset()
})