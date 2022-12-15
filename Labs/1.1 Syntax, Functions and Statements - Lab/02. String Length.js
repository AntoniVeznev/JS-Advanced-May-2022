function input(first, second, third) {

    let firstLength = first.length;
    let secondLength = second.length;
    let thirdLength = third.length;

    const sumOfInputLength = firstLength + secondLength + thirdLength;
    const averageInputLength = sumOfInputLength / 3;

    console.log(sumOfInputLength);
    console.log(Math.floor(averageInputLength));
}

input('pasta', '5', '22.3')