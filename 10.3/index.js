const numbers = [100, 500, 250, 750, 300]

const list = document.querySelector('.list')
const ascButton = document.querySelector('.asc')
const descButton = document.querySelector('.desc')

function renderList(array) {
    list.innerHTML = ''
    array.forEach(element => {
        const newLi = document.createElement('li')
        newLi.textContent = element
        list.append(newLi)
    });
}

ascButton.addEventListener('click', function(){
    const result = numbers.sort((a, b) => a-b)
    renderList(result)
})

descButton.addEventListener('click', function(){
    const result = numbers.sort((a, b) => b-a)
    renderList(result)
})

renderList(numbers)