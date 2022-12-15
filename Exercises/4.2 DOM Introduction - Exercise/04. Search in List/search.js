function search() {
    let listOfTowns = Array.from(document.querySelectorAll('ul li'));
    let searchInput = document.getElementById('searchText');
    let resultElement = document.getElementById("result");
    let counter = 0;
    for (let town of listOfTowns) {
        let current = town.textContent;
        if (current.includes(searchInput.value)) {
            counter++;
            town.style.fontWeight = "bold";
            town.style.textDecoration = 'underline';
        } else {
            town.style.fontWeight = "normal";
            town.style.textDecoration = '';
        }
    }
    resultElement.textContent = `${counter} matches found`;
    searchInput.value = '';
}
