function integerInput(arr) {
    let array = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        array.push(element);
    }
    array.sort(function (a, b) {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    console.log(array[0] + ' ' + array[1]);
}

integerInput([30, 15, 50, 5]);
integerInput([3, 0, 10, 4, 7, 3]);