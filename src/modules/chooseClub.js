const chooseClub = () => {
    const body = document.querySelector('body');
    const chooseClubMenu = document.querySelector('.choose-club-first');

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.club-select')) {
            if(chooseClubMenu.style.display !== 'block') {
                chooseClubMenu.style.display = 'block';
                chooseClubMenu.style.position = 'absolute';
                chooseClubMenu.style.top = '50px';
            } else {
                chooseClubMenu.style.display = 'none';
            }
        } else {
            chooseClubMenu.style.display = 'none';
        }
    });
};

export default chooseClub;