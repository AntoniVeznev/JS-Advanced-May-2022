function greatestCommonDivisor(number1, number2) {

    let firstArr = [];
    let secondArr = [];

    for (let i = 1; i <= number1; i++) {
        if (number1 % i === 0) {
            firstArr.push(i);
        }
    }

    for (let i = 1; i <= number2; i++) {
        if (number2 % i === 0) {
            secondArr.push(i);
        }
    }

    let concatTwoArrays = firstArr.concat(secondArr);

    concatTwoArrays.sort(function (a, b) {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });

    let biggestNumber = 0;

    for (let i = 0; i < concatTwoArrays.length; i ++) {
        if (concatTwoArrays[i] === concatTwoArrays[i + 1]) {
            if (concatTwoArrays[i] > biggestNumber) {
                biggestNumber = concatTwoArrays[i];
            }
        }
    }

    console.log(biggestNumber)

}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);
