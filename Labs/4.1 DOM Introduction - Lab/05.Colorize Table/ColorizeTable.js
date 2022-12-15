function colorize() {
    let rowsArray = Array.from(document.querySelectorAll('tr'));
    for (let row = 0; row < rowsArray.length; row++) {
        let currentRow = rowsArray[row];
        if (row % 2 !== 0) {
            currentRow.style.backgroundColor = 'Teal'
        }
    }
}