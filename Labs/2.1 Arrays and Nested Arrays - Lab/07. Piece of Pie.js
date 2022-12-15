function input(arr, string1, string2) {
    let array = arr;
    let startIndexString = array.indexOf(string1);
    let endIndexString = array.indexOf(string2);
    let final = array.slice(startIndexString, endIndexString + 1);
    return final;
}

input(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
