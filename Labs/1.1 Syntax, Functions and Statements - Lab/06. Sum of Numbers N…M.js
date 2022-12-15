function input(num1, num2) {

    let startNumber = Number(num1);
    let secondNumber = Number(num2);

    let result = 0;

    for (let i = startNumber; i <= secondNumber; i++) {
        result += i;
    }

    console.log(result)

}

input('-8', '20')