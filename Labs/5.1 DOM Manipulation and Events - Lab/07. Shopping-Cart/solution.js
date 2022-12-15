function solve() {
    let resultArea = document.querySelector("textarea");
    let resultAreaButton = document.querySelector("button[class=checkout]");
    let allProductDivs = document.querySelectorAll("div[class=product]");
    let resultText = '';
    let totalSum = 0;
    let arrayWithNames = [];
    for (const productDiv of allProductDivs) {
        let productName = productDiv.querySelector("div[class=product-title]").textContent;
        let productPrice = productDiv.querySelector("div[class=product-line-price]").textContent;
        let productButton = productDiv.querySelector("button[class=add-product]");
        productButton.addEventListener("click", addToCar);
        resultAreaButton.addEventListener('click', onClick);
        let number = Number(productPrice);

        function addToCar() {
            totalSum += number;
            let name = productName;
            if (!arrayWithNames.includes(name)) {
                arrayWithNames.push(name);
                let string = `Added ${productName} for ${number.toFixed(2)} to the cart.` + `\n`;
                resultText += string;
            }
        }

        function onClick() {
            let prod = arrayWithNames.join(', ')
            let string = `You bought ${prod} for ${totalSum.toFixed(2)}.`
            let final = resultText + string;
            resultArea.textContent = final;
        }
    }
}