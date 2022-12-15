function sumTable() {
    let allTableRows = Array.from(document.querySelectorAll("tbody tr"));
    let productsInfo = allTableRows.slice(1, allTableRows.length - 1);
    let totalSum = 0;
    for (let i = 0; i < productsInfo.length; i++) {
        let row = productsInfo[i];
        let rowKids = row.children;
        let price = Number(rowKids[1].textContent);
        totalSum += price;
    }
    let inputResult = document.getElementById("sum");
    inputResult.textContent = totalSum;
}