const chooseClub = () => {
    const body = document.querySelector('body');
    const chooseClubMenu = document.querySelector('.choose-club-first');
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.closest('.club-select')) {

            chooseClubMenu.style.display = 'block';
            chooseClubMenu.style.position = 'absolute';
            chooseClubMenu.style.top = '50px';

        } else if (!target.closest('.choose-club-first')) {
            chooseClubMenu.style.display = 'none';
        }
    });
};

export default chooseClub;