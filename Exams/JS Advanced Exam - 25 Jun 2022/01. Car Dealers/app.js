window.addEventListener("load", solve);

function solve() {
    let makeInput = document.querySelector('input[id=make]');

    let modelInput = document.querySelector('input[id=model]');

    let year = document.querySelector('input[id=year]')

    let fuelType = document.querySelector('select[id=fuel]')

    let originalCost = document.querySelector('input[id=original-cost]');

    let sellingPrice = document.querySelector('input[id=selling-price]');

    let publishButton = document.querySelector('button[id=publish]')

    let tBody = document.querySelector('tbody[id=table-body]');

    let soldCars = document.querySelector('ul[id=cars-list]');

    publishButton.addEventListener('click', sendToRow);


    function sendToRow(event) {
        event.preventDefault();
        if (makeInput.value === '' || modelInput.value === '' || year.value === '' || fuelType.value === ''
            || originalCost.value === '' || sellingPrice.value === '' || Number(originalCost.value) > Number(sellingPrice.value)) {
            return
        }
        let tr = document.createElement("tr");
        tr.className = 'row';
        let td1 = document.createElement("td");
        td1.textContent = makeInput.value;
        let td2 = document.createElement("td");
        td2.textContent = modelInput.value;
        let td3 = document.createElement("td");
        td3.textContent = year.value;
        let td4 = document.createElement("td");
        td4.textContent = fuelType.value;
        let td5 = document.createElement("td");
        td5.textContent = originalCost.value;
        let td6 = document.createElement("td");
        td6.textContent = sellingPrice.value;
        let td7 = document.createElement("td");
        let button1 = document.createElement('button');
        button1.className = 'action-btn edit';
        let button2 = document.createElement('button');
        button2.className = 'action-btn sell';
        td7.appendChild(button1);
        td7.appendChild(button2);
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)
        tr.appendChild(td7)
        tBody.appendChild(tr);


        button1.addEventListener('click', edit);
        button2.addEventListener('click', sell);

        function edit(event) {
            event.preventDefault();
            let parent = event.target.parentElement.parentElement;
            let allTd = Array.from(parent.querySelectorAll('td'));
            makeInput.value = allTd[0].textContent;
            modelInput.value = allTd[1].textContent;
            year.value = allTd[2].textContent;
            fuelType.value = allTd[3].textContent;
            originalCost.value = allTd[4].textContent;
            sellingPrice.value = allTd[5].textContent;
            parent.remove();
        }

        function sell(event) {
            event.preventDefault();
            let parent = event.target.parentElement.parentElement;
            let allTd = Array.from(parent.querySelectorAll('td'));

            let li = document.createElement('li')
            li.className = 'each-list'
            let span1 = document.createElement('span')
            span1.textContent = allTd[0].textContent + ' ' + allTd[1].textContent;
            let span2 = document.createElement('span')
            span2.textContent = allTd[2].textContent
            let span3 = document.createElement('span')
            let num1 = Number(allTd[5].textContent)
            let num2 = Number(allTd[4].textContent)
            span3.textContent = (num1 - num2).toString();

            li.appendChild(span1)
            li.appendChild(span2)
            li.appendChild(span3)
            soldCars.appendChild(li);

        }

        makeInput.value = '';
        modelInput.value = ''
        year.value = ''
        fuelType.value = ''
        originalCost.value = ''
        sellingPrice.value = ''
    }

}
