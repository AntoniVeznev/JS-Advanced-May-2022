function solve(numbers, previousElements) {
    let array = [1];
    for (let i = 1; i < numbers; i++) {
        let sum = 0;
        if (array.length < previousElements) {
            for (let j = 0; j < array.length; j++) {
                sum += array[j];
            }

        } else {
            for (let j = array.length - 1; j > array.length - previousElements-1; j--) {
                sum += array[j];
            }
        }
        array.push(sum);
    }
    return array;
}


solve(6, 1);
solve(6, 3);
solve(8, 2);

