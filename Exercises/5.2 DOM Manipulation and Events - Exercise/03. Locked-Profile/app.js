function lockedProfile() {
    let allProfiles = document.querySelectorAll('div[class=profile]');
    for (const profile of allProfiles) {
        let profileButton = profile.querySelector('button');
        let div = profile.querySelector("div");
        profileButton.addEventListener('click', showOrHideText);

        function showOrHideText(event) {
            let unlock = profile.querySelector('input[type="radio"][value="unlock"]').checked;
            if (unlock) {
                if (event.target.textContent === 'Show more') {
                    div.style.display = 'inline'
                    event.target.textContent = 'Hide it'
                } else {
                    div.style.display = ''
                    event.target.textContent = 'Show more'
                }
            }
        }
    }
}