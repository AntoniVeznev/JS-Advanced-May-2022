function solve(array) {

    array.sort((x, y) => {
        if (x.length > y.length) {
            return 1;
        } else if (y.length > x.length) {
            return -1;
        } else {
            return x.localeCompare(y);
        }
    })
    for (const element of array) {
        console.log(element)
    }
}

solve(['alpha',
    'beta',
    'gamma']);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
solve(['test',
    'Deny',
    'omen',
    'Default']);