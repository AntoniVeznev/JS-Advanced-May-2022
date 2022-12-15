function solve(car) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
    let carriages = [{type: 'hatchback', color: car.color}, {type: 'coupe', color: car.color}];
    let arrayWheels = [];
    if (car.wheelsize % 2 !== 0) {
        arrayWheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize]
    } else {
        arrayWheels = [car.wheelsize - 1, car.wheelsize - 1, car.wheelsize - 1, car.wheelsize - 1]
    }
    let object = {};
    object.model = car.model;
    object.engine = {};
    object.carriage = {};
    object.wheels = arrayWheels;
    if (car.power <= 90) {
        object.engine = engines[0];
    } else if (car.power <= 120) {
        object.engine = engines[1];
    } else {
        object.engine = engines[2];
    }
    if (car.carriage === 'hatchback') {
        object.carriage = carriages[0];
    } else {
        object.carriage = carriages[1];
    }
    return object;
}


solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
