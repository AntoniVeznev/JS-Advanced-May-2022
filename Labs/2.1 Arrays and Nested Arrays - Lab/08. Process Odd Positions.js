function numberInput(arr) {
    let array = arr;
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index % 2 !== 0) {
            let finalNumber = element * 2;
            newArray.push(finalNumber);
        }

    }
    return newArray.reverse();
}

numberInput([10, 15, 20, 25]);
numberInput([3, 0, 10, 4, 7, 3]);