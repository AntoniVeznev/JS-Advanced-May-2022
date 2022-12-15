function extractText() {
    let textElement = document.getElementById("items").textContent;
    let resultElement = document.getElementById("result");
    resultElement.value = textElement;
}
