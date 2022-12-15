function solve(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            let element = matrix[row][col];
            if (row === col) {
                mainDiagonalSum += element;
            }
            if ((row + col) === (matrix.length - 1)) {
                secondaryDiagonalSum += element;
            }
        }
    }
    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

solve([[20, 40],
    [10, 60]]);

