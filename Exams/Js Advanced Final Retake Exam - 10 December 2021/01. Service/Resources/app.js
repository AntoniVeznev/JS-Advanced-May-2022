window.addEventListener('load', solve);

function solve() {
    let parentTypeProduct = document.getElementById('type-product');
    let receivedOrders = document.getElementById("received-orders");
    let submitButton = document.querySelector('button[type=submit]')
    let name = document.querySelector('input[id=client-name]');
    let phone = document.querySelector('input[id=client-phone]')
    let description = document.querySelector('textarea[id=description]');
    let completedOrders = document.getElementById('completed-orders');
    let clearButton = document.querySelector('button[class=clear-btn]');
    submitButton.addEventListener('click', letsClickIt);

    function letsClickIt(event) {
        event.preventDefault();

        let div = document.createElement('div');
        div.className = 'container';

        let h2 = document.createElement('h2');
        h2.textContent = 'Product type for repair: ' + parentTypeProduct.value;

        let h3 = document.createElement('h3');
        h3.textContent = 'Client information: ' + name.value + ', ' + phone.value;

        let h4 = document.createElement('h4');
        h4.textContent = 'Description of the problem: ' + description.value;

        let button1 = document.createElement('button');
        button1.textContent = 'Start repair';
        button1.className = 'start-btn';

        let button2 = document.createElement('button');
        button2.textContent = 'Finish repair';
        button2.className = 'finish-btn';
        button2.disabled = true;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(button1);
        div.appendChild(button2);

        receivedOrders.appendChild(div);

        name.value = '';
        phone.value = '';
        description.value = '';

        button1.addEventListener('click', disableButton);
        button2.addEventListener('click', moveToOrders);

        function disableButton(ev) {
            button1.disabled = true;
            button2.disabled = false;
        }

        function moveToOrders(e) {
            let parent = e.target.parentNode
            let previousH2 = parent.querySelector('h2');
            let previousH3 = parent.querySelector('h3');
            let previousH4 = parent.querySelector('h4');

            let div = document.createElement('div');
            div.className = 'container';
            let h2 = document.createElement('h2');
            h2.textContent = previousH2.textContent;
            let h3 = document.createElement('h3');
            h3.textContent = previousH3.textContent;
            let h4 = document.createElement('h4');
            h4.textContent = previousH4.textContent;

            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(h4);
            completedOrders.appendChild(div);
        }

    }

    clearButton.addEventListener('click', clearAll);

    function clearAll(event) {
        let ordersAll = Array.from(completedOrders.querySelectorAll('div'));
        let size = ordersAll.length
        for (let i = 0; i < size; i++) {
            let current = ordersAll[i];
            current.remove();
        }
    }
}
