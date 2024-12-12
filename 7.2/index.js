const heights = [164, 157, 160, 143, 170]

const addButton = document.querySelector('.add-button')
const filterButton = document.querySelector('.filter-button')
const list = document.querySelector('.list')

function filterByMin(array, min) {
    const result = []
    for (const element of array) {
        if (element >= min) {
            result.push(element)
        }
    }
    return result
}

function renderList(array) {
    list.innerHTML = ""
    for (const element of array) {
        const newLi = document.createElement('li')
        newLi.textContent = element
        list.append(newLi)
    }
}

addButton.onclick = function() {
    const newLi = document.createElement('li')
    let newHeight = prompt('Введите рост')
    if (newHeight != "") {
        newLi.textContent = newHeight
        list.append(newLi)
        heights.push(newHeight)
    } else {
        alert('Рост не введён!')
    }
}

filterButton.onclick = function() {
    const min = prompt('Введите минимальный рост')
    if (min != "") {
        const filteredArray = filterByMin(heights, min)
        renderList(filteredArray)
    } else {
        renderList(heights)
    }
}

renderList(heights)