function editElement(reference, match, replacer) {
    if (reference.textContent.includes(match)) {
        let test = reference.textContent.split(match).join(replacer);
        reference.textContent = test;
    }
}