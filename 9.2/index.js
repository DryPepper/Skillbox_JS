const cars = {
    bmw: {
            name: 'BMW',
            wheels: 4,
            doors: 4,
            isStarted: false,
            hp: 200,
        },
    dodge: {
            name: 'Dodge',
            wheels: 4,
            doors: 2,
            isStarted: false,
            hp: 250,
        },
    renault: {
            name: 'Renault',
            wheels: 4,
            doors: 4,
            isStarted: false,
            hp: 100,
        },
}

function writeCarNames(cars) {
    Object.keys(cars).forEach(car => {
        console.log(cars[car].name)
    });
}

writeCarNames(cars)