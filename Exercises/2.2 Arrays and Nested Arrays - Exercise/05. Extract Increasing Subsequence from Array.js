function solve(array) {

    let finalArray = [];

    let biggestNumber = array[0];

    for (let index = 0; index < array.length; index++) {

        if (biggestNumber <= array[index]) {
            biggestNumber = array[index];
            finalArray.push(biggestNumber)
        }
    }
    return (finalArray)
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
solve([1,
    2,
    3,
    4]);
solve([20,
    3,
    2,
    15,
    6,
    1]);