const name = document.querySelector('.name')
const email = document.querySelector('.email')
const genders = document.querySelectorAll('.gender')
const rating = document.querySelector('.rating')
const interests = document.querySelectorAll('.interests')
const comment = document.querySelector('.comment')
const form = document.querySelector('.form')
const result = document.querySelector('.result')

form.addEventListener('submit', function(e){
    e.preventDefault()
    result.innerHTML = ''

    header = document.createElement('h2')
    header.textContent = 'Результаты опроса'
    result.append(header)

    resName = document.createElement('p')
    resName.textContent = `Имя пользователя: ${name.value}`
    result.append(resName)

    resEmail = document.createElement('p')
    resEmail.textContent = `Email: ${email.value}`
    result.append(resEmail)

    resGender = document.createElement('p')
    for (const button of genders) {
        if (button.checked) {
            resGender.textContent = `Пол: ${button.value}`
        }
    }
    result.append(resGender)

    resRating = document.createElement('p')
    resRating.textContent = `Оценка сервиса: ${rating.value}`
    result.append(resRating)

    resInterests = document.createElement('p')
    const interestsResult = []
    for (const button of interests) {
        if (button.checked) {
            interestsResult.push(button.value)
        }
    }
    const resInterestsString = `Интересы пользователя: ${interestsResult}`
    resInterests.textContent = resInterestsString.replaceAll(',', ', ')
    result.append(resInterests)

    resComment = document.createElement('p')
    resComment.textContent = `Дополнительные комментарии: ${comment.value}`
    result.append(resComment)
})