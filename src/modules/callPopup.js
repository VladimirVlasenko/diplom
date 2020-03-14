const callPopup = () => {
    const body = document.querySelector('body');
    const callbackForm = document.querySelector('#callback_form');
    const freeVisitForm = document.querySelector('#free_visit_form');
    const popupGift = document.querySelector('#gift');
    const fixedGift = document.querySelector('.fixed-gift');
    const thanks = document.querySelector('#thanks');
    const time = document.querySelector('.time');
    body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.call') && target.closest('.head')) {
            callbackForm.style.display = 'flex';
        }
        if (callbackForm.style.display === 'flex') {
            if (target.closest('.close-form') || target.classList.contains('overlay')) {
                callbackForm.style.display = 'none';
            }
        }
        if (target.closest('.free-visit')) {
            freeVisitForm.style.display = 'flex';
        }
        if (freeVisitForm.style.display === 'flex') {
            if (target.closest('.close-form') || target.classList.contains('overlay')) {
                freeVisitForm.style.display = 'none';
            }
        }
        if (target.closest('.fixed-gift')) {
            popupGift.style.display = 'flex';
        }
        if (popupGift.style.display === 'flex') {
            if (target.closest('.close-form') || target.classList.contains('overlay') || target.matches('.close-btn')) {
                popupGift.style.display = 'none';
                fixedGift.style.display = 'none';
            }
        }
        if (thanks.style.display === 'flex') {
            if(target.closest('.close-form') || target.matches('.close-btn') || target.classList.contains('overlay')) {
                thanks.style.display = 'none';
            } 
        }
    });
};
export default callPopup;
