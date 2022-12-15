function solve(array) {

    let number = 0;
    let finalArray = [];

    for (let indexArray = 0; indexArray < array.length; indexArray++) {

        number++;

        if (array[indexArray] === 'add') {
            finalArray.push(number);
        } else {
            finalArray.pop();
        }
    }

    if (finalArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(finalArray.join('\n'));
    }
}

solve(['add',
    'add',
    'add',
    'add']);
solve(['add',
    'add',
    'remove',
    'add',
    'add']);
solve(['remove',
    'remove',
    'remove']);