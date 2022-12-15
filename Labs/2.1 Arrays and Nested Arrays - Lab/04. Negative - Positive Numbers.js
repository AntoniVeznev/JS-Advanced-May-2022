function intInput(input) {

    let arr = [];
    let finalArray = [];

    for (let index = 0; index < input.length; index++) {
        let currentElement = input[index];
        arr.push(currentElement);
    }
    for (let index = 0; index < arr.length; index++) {
        let currentNumber = arr[index];
        if (currentNumber >= 0) {
            finalArray.push(currentNumber);
        } else if (currentNumber < 0) {
            finalArray.unshift(currentNumber);
        }
    }
    for (let index = 0; index < finalArray.length; index++) {
        console.log(finalArray[index]);
    }
}

intInput([7, -2, 8, 9]);
intInput([3, -2, 0, -1]);