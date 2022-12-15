function input(arr) {
    let array = [];
    let finalArray = [];
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
    if (array.length % 2 === 0) {
        for (let index = array.length / 2; index < array.length; index++) {
            let element = array[index];
            finalArray.push(element);
        }

    } else if (array.length % 2 !== 0) {
        let size = Math.floor(array.length / 2);
        for (let index = size; index < array.length; index++) {
            let element = array[index];
            finalArray.push(element);
        }
    }

    return finalArray;
}


input([3, 19, 14, 7, 2, 19, 6]);