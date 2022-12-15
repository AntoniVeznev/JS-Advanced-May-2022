function solve(array, number) {
    let finalArray = [];
    for (let index = 0; index < array.length; index += number) {
        finalArray.push(array[index]);
    }
    return finalArray;
}

solve(['5',
        '20',
        '31',
        '4',
        '20'],
    2);
solve(['dsa',
        'asd',
        'test',
        'tset'],
    2);
solve(['1',
        '2',
        '3',
        '4',
        '5'],
    6);