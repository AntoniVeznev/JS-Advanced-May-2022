function input(firstNum, secondNum, symbol) {

    let num1 = Number(firstNum);
    let num2 = Number(secondNum);

    let result;

    if (symbol === '+') {
        result = Number(num1 + num2);

    } else if (symbol === '-') {
        result = Number(num1 - num2);

    } else if (symbol === '*') {
        result = Number(num1 * num2);

    } else if (symbol === '/') {
        result = Number(num1 / num2);

    } else if (symbol === '%') {
        result = Number(num1 % num2);

    } else {
        result = Number(num1 ** num2);

    }

    console.log(result)

}

input(3, 5.5, '*')