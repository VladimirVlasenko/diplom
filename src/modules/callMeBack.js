const callMeBack = () => {
    const body = document.querySelector('body');
    const callbackForm = document.querySelector('#callback_form');
    let freeVisitForm = document.querySelector('#free_visit_form');
    const time = document.querySelector('.time');
    const months = time.querySelectorAll('input');
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
    });
};
export default callMeBack;
