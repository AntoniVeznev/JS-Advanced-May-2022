function solve(array) {
    let rows = array.length;

    let biggestElement = -9999999999999999999999999999999999999999999999999999999999999999999999999999999;
    for (let row = 0; row < rows; row++) {
        let currentTest = array[row];
        for (let i = 0; i < currentTest.length; i++) {
            let element = Number(array[row][i]);
            if (element > biggestElement) {
                biggestElement = element;
            }
        }
    }

    return biggestElement;
}

solve([[-1, -2, -3, -4]])
solve([[20, 50, 10, 200],
    [8, 33, 145]]);
solve([[3, 5, 7, 12, 300],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);
solve([[3, 5, 17, 12, 400, 5,
    1, 7, 4, 33, 99, 22,
    1, 8, 99, 3, 10, 43]])
