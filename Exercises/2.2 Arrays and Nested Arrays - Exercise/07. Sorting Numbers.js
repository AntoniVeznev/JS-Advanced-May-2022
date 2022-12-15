function solve(array) {

    let testArray = [];

    array.sort((x, y) => {
        if (x > y) {
            return 1;
        } else if (y > x) {
            return -1;
        } else {
            return 0;
        }
    });
    let size = array.length;
    for (let index = 0; index < size; index++) {
        if (array.length === 0) {
            break;
        }

        let smallestElement = array.shift();
        let biggestElement = array.pop();
        testArray.push(smallestElement);
        testArray.push(biggestElement);
    }
    return testArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
