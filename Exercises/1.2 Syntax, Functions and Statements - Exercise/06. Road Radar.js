function driverSpeedStatus(number, area) {
    let speed = Number(number);
    let zone = area.toString();

    let speedLimit = 0;
    let isWithLegalSpeed = true;
    let status = '';

    switch (zone) {
        case 'city':
            speedLimit = 50;
            break;
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break
        case 'residential':
            speedLimit = 20;
            break
    }

    if (speed - speedLimit >= 1 && speed - speedLimit <= 20) {
        status = 'speeding';
    } else if (speed - speedLimit >= 21 && speed - speedLimit <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    if (speed <= speedLimit) {
        isWithLegalSpeed = true;
    } else {
        isWithLegalSpeed = false;
    }

    if (isWithLegalSpeed) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }
}


driverSpeedStatus(40, 'city')
driverSpeedStatus(21, 'residential')
driverSpeedStatus(120, 'interstate')
driverSpeedStatus(200, 'motorway')
