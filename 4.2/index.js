function farToCel(tempInFar) {
    return (tempInFar - 32) / 1.8
}

function celToFar(tempInCel) {
    return tempInCel * 1.8 + 32
}

console.log(celToFar(25))
console.log(celToFar(50))

console.log(farToCel(77))
console.log(farToCel(177))