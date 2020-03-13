const callMeBack = () => {
    const body = document.querySelector('body');
    const callbackForm = document.querySelector('#callback_form');
    body.addEventListener('click', (event) => {
        let target = event.target;
        if(target.closest('.call')) {
            callbackForm.style.display = 'flex';
        }
        if (callbackForm.style.display === 'flex') {
            if (target.closest('.close-form') || target.classList.contains('overlay')) {
                callbackForm.style.display = 'none';
            }
        }
    });
};
export default callMeBack;
