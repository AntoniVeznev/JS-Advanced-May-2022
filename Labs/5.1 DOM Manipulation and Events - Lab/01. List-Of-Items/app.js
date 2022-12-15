function addItem() {
    let input = document.querySelector('input[id=newItemText]');
    let ul = document.querySelector('ul');
    let createNewLiElement = document.createElement('li');
    createNewLiElement.textContent = input.value;
    ul.appendChild(createNewLiElement);
}