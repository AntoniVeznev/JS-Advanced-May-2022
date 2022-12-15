function solve() {

    let recipient = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let listOfMails = document.querySelector('ul[id=list]');
    let buttonAddToTheList = document.getElementById('add');
    let resetButton = document.getElementById('reset');
    let ul = document.querySelector('ul[class=sent-list]');
    let deletedMails = document.querySelector('ul[class=delete-list]');
    buttonAddToTheList.addEventListener('click', addInformation);
    resetButton.addEventListener('click', resetInput);

    function addInformation(event) {
        event.preventDefault();
        if (recipient.value !== '' || title.value !== '' || message.value !== '') {
            let li = document.createElement('li');

            let h41 = document.createElement('h4');
            h41.textContent = `Title: ${title.value}`
            let h42 = document.createElement('h4');
            h42.textContent = `Recipient Name: ${recipient.value}`
            let span = document.createElement('span');
            span.textContent = message.value;

            let div = document.createElement('div');
            div.id = 'list-action';
            let button1 = document.createElement('button');
            button1.type = 'submit';
            button1.id = 'send';
            button1.textContent = 'Send'
            let button2 = document.createElement('button');
            button2.type = 'submit';
            button2.id = 'delete';
            button2.textContent = 'Delete'

            div.appendChild(button1)
            div.appendChild(button2)

            li.appendChild(h41)
            li.appendChild(h42)
            li.appendChild(span)
            li.appendChild(div)

            listOfMails.appendChild(li);


            button1.addEventListener('click', send)
            button2.addEventListener('click', mails)

            function send(event) {
                event.preventDefault();
                let parent = event.target.parentElement.parentElement;
                let h4Elements = Array.from(parent.getElementsByTagName('h4'));
                let recip = h4Elements[0];
                let titl = h4Elements[1];

                let li = document.createElement('li');

                let span1 = document.createElement('span');
                span1.textContent = `To: ${titl.textContent.split(': ')[1]}`

                let span2 = document.createElement('span');
                span2.textContent = `Title: ${recip.textContent.split(': ')[1]}`

                let div = document.createElement('div');
                div.className = 'btn';

                let button = document.createElement('button');
                button.type = 'submit';
                button.className = 'delete';
                button.textContent = 'Delete';
                button.addEventListener('click', deleteIt);

                function deleteIt(event) {
                    event.preventDefault();
                    let p = event.target.parentElement.parentElement;
                    let spanAll = Array.from(p.getElementsByTagName('span'));
                    let s1 = spanAll[0];
                    let s2 = spanAll[1];
                    let li = document.createElement('li');

                    let span1111 = document.createElement('span');
                    span1111.textContent = `To: ${s1.textContent.split(': ')[1]}`
                    let span2222 = document.createElement('span');
                    span2222.textContent = `Title: ${s2.textContent.split(': ')[1]}`
                    li.appendChild(span1111);
                    li.appendChild(span2222);
                    deletedMails.appendChild(li)
                    p.remove();
                }

                div.appendChild(button);
                li.appendChild(span1);
                li.appendChild(span2);
                li.appendChild(div);
                ul.appendChild(li);
                parent.remove();
            }

            function mails(event) {
                event.preventDefault();
                let p = event.target.parentElement.parentElement;
                let h4Elements = Array.from(p.getElementsByTagName('h4'));
                let r = h4Elements[0];
                let t = h4Elements[1];
                let li = document.createElement('li');
                let span1111 = document.createElement('span');
                span1111.textContent = `To: ${t.textContent.split(': ')[1]}`
                let span2222 = document.createElement('span');
                span2222.textContent = `Title: ${r.textContent.split(': ')[1]}`
                li.appendChild(span1111);
                li.appendChild(span2222);
                deletedMails.appendChild(li)
                let parent = event.target.parentElement.parentElement;
                parent.remove();
            }

            title.value = '';
            message.value = '';
            recipient.value = '';
        }
    }

    function resetInput(event) {
        event.preventDefault();
        title.value = '';
        message.value = '';
        recipient.value = '';
    }

}

solve()