function createCar(obj) {
    const base = {
            wheels: 4,
            doors: 4,
            isStarted: false,
        }
    return Object.assign(base, obj)
}

console.log(createCar({ name: 'Haval', hp: 198 }))