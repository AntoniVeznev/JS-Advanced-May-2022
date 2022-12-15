function solve(matrix) {

    let counter = 0;

    for (let indexRow = 0; indexRow < matrix.length; indexRow++) {
        for (let indexCol = 0; indexCol < matrix[indexRow].length; indexCol++) {
            let currentElement = matrix[indexRow][indexCol];
            let rightElement = matrix[indexRow][indexCol + 1];
            if (currentElement === rightElement) {
                counter++;
            }
        }
    }
    for (let indexRow = 0; indexRow < matrix.length - 1; indexRow++) {
        for (let indexCol = 0; indexCol < matrix[indexRow].length; indexCol++) {
            let currentElement = matrix[indexRow][indexCol];
            let bottomElement = matrix[indexRow + 1][indexCol];
            if (currentElement === bottomElement) {
                counter++;
            }
        }
    }

    return counter;
}

solve([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]);
