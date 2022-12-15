window.addEventListener("load", solve);

function solve() {


    let titleInputArea = document.getElementById('post-title');
    let categoryInputArea = document.getElementById('post-category');
    let contentInputArea = document.getElementById('post-content');
    let publishButton = document.getElementById('publish-btn');
    let test2 = categoryInputArea.textContent;
    let test3 = contentInputArea.textContent;
    let review = document.getElementById('review-list')

    let published = document.getElementById('published-list');
    let clearButton = document.getElementById('clear-btn');


    publishButton.addEventListener('click', addInfoInUL);


    function addInfoInUL(event) {

        if (titleInputArea.value !== '' || categoryInputArea.value !== '' || contentInputArea.value !== '') {

            event.preventDefault();

            let createLi = document.createElement('li');
            createLi.className = "rpost";

            let article = document.createElement('article');

            let h4 = document.createElement('h4');
            h4.textContent = titleInputArea.value;

            let p1 = document.createElement('p');
            p1.textContent = 'Category: ' + categoryInputArea.value;

            let p2 = document.createElement('p');
            p2.textContent = 'Content: ' + contentInputArea.value;

            let editButton = document.createElement('button');
            editButton.className = 'action-btn edit';
            editButton.textContent = 'Edit';

            let approveButton = document.createElement('button');
            approveButton.className = 'action-btn approve';
            approveButton.textContent = 'Approve';

            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);

            createLi.appendChild(article);
            createLi.appendChild(editButton);
            createLi.appendChild(approveButton);

            review.appendChild(createLi)


            editButton.addEventListener('click', returnInformation);
            approveButton.addEventListener('click', deleteRecord);

            function returnInformation(event) {

                let parent = event.target.parentElement

                let selectTitle = parent.querySelector('article h4').textContent;
                let arrFromParagraphs = Array.from(parent.querySelectorAll('article p'));
                let selectCategory = arrFromParagraphs[0].textContent;
                let selectContent = arrFromParagraphs[1].textContent;

                titleInputArea.value = selectTitle;
                categoryInputArea.textContent = test2;
                contentInputArea.textContent = test3;

                parent.remove();
            }

            function deleteRecord(event) {
                let mainEvent = event.target.parentElement

                let selectTitle = mainEvent.querySelector('article h4').textContent;
                let arrFromParagraphs = Array.from(mainEvent.querySelectorAll('article p'));
                let selectCategory = arrFromParagraphs[0].textContent;
                let selectContent = arrFromParagraphs[1].textContent;

                let li = document.createElement('li');
                li.className = 'rpost';

                let article = document.createElement('article');

                let h4 = document.createElement('h4');
                h4.textContent = selectTitle;
                let p1 = document.createElement('p');
                p1.textContent = selectCategory;
                let p2 = document.createElement('p');
                p2.textContent = selectContent;

                article.appendChild(h4);
                article.appendChild(p1);
                article.appendChild(p2);

                li.appendChild(article);

                published.appendChild(li);

                editButton.parentElement.remove();


            }

            clearButton.addEventListener('click', removeAll);

            function removeAll() {
                let allLi = Array.from(published.querySelectorAll('li'));
                for (const htmlliElement of allLi) {
                    htmlliElement.remove();
                }
            }

        }
    }
}
