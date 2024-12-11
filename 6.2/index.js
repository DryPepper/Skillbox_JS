const numbers = [12, 5, 8, 20, 3, 16]

const elementsContainer = document.querySelector('.all-elements')
const minButton = document.querySelector('.min')
const maxButton = document.querySelector('.max')
const minNumber = document.querySelector('.minNumber')
const maxNumber = document.querySelector('.maxNumber')

elementsContainer.textContent = numbers

minButton.onclick = function () {
    let min = 99999999
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    minNumber.textContent = min
}

maxButton.onclick = function () {
    let max = -99999999
    for (const number of numbers) {
        if (number > max) {
            max = number
        }
    }
    maxNumber.textContent = max
}