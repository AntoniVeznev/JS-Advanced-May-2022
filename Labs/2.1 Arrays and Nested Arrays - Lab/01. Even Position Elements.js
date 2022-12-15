function input(array) {

    let newArray = [];

    let size = array.length;

    for (let index = 0; index < size; index += 2) {
        newArray.push(array[index]);
    }
    console.log(newArray.join(' '));

}

input(['20', '30', '40', '50', '60']);
input(['5', '10']);