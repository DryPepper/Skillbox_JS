let power = Number(prompt())
let taxRate = Number()

if (power < 100) {
    taxRate = 12
} else if (100 <= power < 125) {
    taxRate = 25
} else if (125 <= power < 150) {
    taxRate = 35
} else if (150 <= power < 175) {
    taxRate = 45
} else if (175 <= power < 200) {
    taxRate = 50
} else if (200 <= power < 225) {
    taxRate = 65
} else if (225 <= power < 250) {
    taxRate = 75
} else {
    taxRate = 150
}

let tax = power * taxRate
console.log("Сумма налога:", power * taxRate)