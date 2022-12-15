function solve(matrix) {

    let matrixIsMagical = true;

    let oldSumRows = 0;
    let currentSumRow = 0;

    let oldSumCols = 0;
    let currentSumCol = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = matrix[row];
        currentSumRow = 0;
        for (let i = 0; i < currentRow.length; i++) {
            let currentNumber = currentRow[i];
            currentSumRow += currentNumber;
        }
        if (oldSumRows === 0) {
            oldSumRows = currentSumRow;
            continue;
        }

        if (oldSumRows !== currentSumRow) {
            matrixIsMagical = false;
            break;
        } else {
            oldSumRows = currentSumRow;
        }

    }
    for (let col = 0; col < matrix.length; col++) {
        currentSumCol = 0;
        for (let row = 0; row < matrix.length; row++) {
            let currentNumber = matrix[row][col];
            currentSumCol += currentNumber;
        }
        if (oldSumCols === 0) {
            oldSumCols = currentSumCol;
            continue;
        }
        if (oldSumCols !== currentSumCol) {
            matrixIsMagical = false;
            break;
        } else {
            oldSumCols = currentSumCol;
        }
    }
    console.log(matrixIsMagical)
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);
