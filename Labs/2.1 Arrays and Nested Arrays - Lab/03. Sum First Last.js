function inputString(input) {

    let arr = [];

    for (let index = 0; index < input.length; index++) {
        let currentElement = input[index];
        arr.push(Number(currentElement));
    }
    let firstElement=arr[0];
    let lastElement = arr[arr.length-1];


    console.log(firstElement+lastElement);

}

inputString(['20', '30', '40']);

inputString(['5', '10']);
