function input(argument) {

    let type = typeof argument;

    if (typeof argument === 'number') {

        let radius = argument;
        let result = radius * radius * Math.PI;
        let final = result.toFixed(2);
        console.log(final)

    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }

}

input(5)

input('name')