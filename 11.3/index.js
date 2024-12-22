const number = document.querySelector('.number')
const color = document.querySelector('.color-select')
const card = document.querySelector('#card')

number.addEventListener('input', (e) => {
    card.textContent = e.target.value
})

number.addEventListener('focus', () => {
    number.style.borderColor = 'blue'
})

number.addEventListener('blur', () => {
    number.style.borderColor = 'gray'
})

color.addEventListener('change', (e) => {
    card.style.backgroundColor = e.target.value
})