function solve(array, number) {

    for (let index = 0; index < number; index++) {
        let element = array.pop()
        array.unshift(element);
    }
    console.log(array.join(' '))
}

solve(['1',
        '2',
        '3',
        '4'],
    2);
solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15);
