const currentYear = 2024
let counter = 0

let user1 = prompt("Введите имя пользователя")
let birthYear1 = prompt("Введите год рождения пользователя")
let age1 = currentYear - birthYear1
console.log(++counter, user1, age1)

let user2 = prompt("Введите имя пользователя")
let birthYear2 = prompt("Введите год рождения пользователя")
let age2 = currentYear - birthYear2
console.log(++counter, user2, age2)

let user3 = prompt("Введите имя пользователя")
let birthYear3 = prompt("Введите год рождения пользователя")
let age3 = currentYear - birthYear3
console.log(++counter, user3, age3)

console.log("Средний возраст пользователей:", (age1 + age2 + age3) / 3)