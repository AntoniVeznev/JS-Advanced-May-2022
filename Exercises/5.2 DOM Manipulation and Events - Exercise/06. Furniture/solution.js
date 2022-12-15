function solve() {
    let allButtons = Array.from(document.getElementsByTagName('button'));
    let button1 = allButtons[0];
    let button2 = allButtons[1];
    button1.addEventListener('click', generate);
    button2.addEventListener('click', buy);

    function generate() {
        let allTextAreas = Array.from(document.querySelectorAll('textarea'));
        let first = JSON.parse(allTextAreas[0].value);
        first.forEach(x => {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let img1 = document.createElement('img');
            img1.src = x.img;
            td1.appendChild(img1);
            tr.appendChild(td1);
            let td2 = document.createElement('td');
            let p = document.createElement('p');
            p.textContent = x.name;
            td2.appendChild(p);
            tr.appendChild(td2);
            let td3 = document.createElement('td');
            let p2 = document.createElement('p');
            p2.textContent = Number(x.price);
            td3.appendChild(p2);
            tr.appendChild(td3);
            let td4 = document.createElement("td");
            let p3 = document.createElement("p");
            p3.textContent = Number(x.decFactor);
            td4.appendChild(p3);
            tr.appendChild(td4);
            let td5 = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'checkbox';
            td5.appendChild(input);
            tr.appendChild(td5);
            document.querySelector('tbody').appendChild(tr)
        });
    }

    function buy() {
        let allCheckBoxes = Array.from(document.querySelectorAll("tbody input"))
        let allProducts = [];
        let totalPrice = 0;
        let averageDecor = 0;
        let count = 0;
        for (const box of allCheckBoxes) {
            if (box.checked) {
                count++;
                let test1 = box.parentElement;
                let test2 = test1.parentElement;
                let name = Array.from(test2.getElementsByTagName("td"))[1].textContent
                let price = Array.from(test2.getElementsByTagName("td"))[2].textContent
                let decoration = Array.from(test2.getElementsByTagName("td"))[3].textContent
                allProducts.push(name);
                totalPrice += Number(price);
                averageDecor += Number(decoration);
            } else {
            }
        }
        let newArr = allProducts.join(', ')
        let resultString = 'Bought furniture: ' + newArr + `\n` + `Total price: ${totalPrice.toFixed(2)}` + `\n` + `Average decoration factor: ${averageDecor / count}`
        let allTextAreas = Array.from(document.querySelectorAll('textarea'));
        let resultArea = allTextAreas[1];
        resultArea.textContent = resultString
    }
}