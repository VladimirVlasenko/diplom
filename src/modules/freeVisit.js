const freeVisit = () => {
let freeVisitForm = document.querySelector('#free_visit_form');
const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.free-visit')) {
        freeVisitForm.style.display = 'flex';
    }
    if (freeVisitForm.style.display === 'flex') {
        console.log(target);
        if (target.closest('.close-form') || target.classList.contains('overlay')) {
            freeVisitForm.style.display = 'none';
        }
    }
    
});

};

export default freeVisit;