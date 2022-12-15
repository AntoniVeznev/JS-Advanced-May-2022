function deleteByEmail() {

    let selectAllTR = Array.from(document.querySelectorAll('tbody tr'));
    let inputEmail = document.querySelector('input[name=email]').value;
    let resultField = document.querySelector('div[id=result]');
    let itExists = false;

    for (const tr of selectAllTR) {
        let kids = tr.children;
        let email = kids[1].textContent
        if (email === inputEmail) {
            itExists = true;
            tr.remove();
        }
    }
    if (itExists) {
        resultField.textContent = 'Deleted.'
    } else {
        resultField.textContent = 'Not found.'
    }
}