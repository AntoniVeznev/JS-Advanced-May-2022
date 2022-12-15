function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let rows = document.querySelectorAll("tbody tr");
    let input = document.querySelector('input[id=searchField]')

    function onClick() {
        for (let row of rows) {
            let currentRow = row.innerHTML;
            if (currentRow.includes(input.value)) {
                row.className = 'select';
            }
        }
        input.value = '';
    }
}
