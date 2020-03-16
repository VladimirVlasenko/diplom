const sendForm = () => {
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };


    let bodyTag = document.querySelector('body');
    let allInputs = document.querySelectorAll('input');
    const freeVisitForm = document.querySelector('#free_visit_form');
    const callbackForm = document.querySelector('#callback_form');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `
    font-size: 2rem;
    display: block;
    text-align: center;
    align-items: center;
    `;

    const formContent = document.querySelector('.form-content');
    let popup = document.querySelectorAll('.popup');
    let thanks = document.querySelector('#thanks');
    
    bodyTag.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;


        let successMessage = () => {

            allInputs.forEach((item) => {
                if (item.type !== 'radio' &&  item.type !== 'hidden') {
                    item.value = '';
                    item.checked = false;
                }
                
            });
            setTimeout(() => {
                    if (target.closest('.popup')) {
                        let elements = target.children;
                        for (let i = 0; i < elements.length; i++) {
                            elements[i].style.display = 'block';
                        }
                    }
                    statusMessage.textContent = '';
                    freeVisitForm.style.display = 'none';
                    callbackForm.style.display = 'none';

                 
            }, 0);
            thanks.style.display = 'flex';
            setTimeout(() => {
                thanks.style.display = 'none';
            }, 3000);
                
        };

        const formData = new FormData(target);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        let errorMessage = () => {
            statusMessage.textContent = 'Что-то пошло не так...';
        };

        if (target.matches('form')) {

            if (target.closest('.popup')) {
                let elements = target.children;
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                }
            }
            statusMessage.textContent = 'Загрузка...';
            statusMessage.style.cssText = `
            font-size: 2rem;
            display: block;
            margin: 0 auto;
            align-items: center;
            color: white;
            `;
            if (!target.matches('#card_order')) {
                target.appendChild(statusMessage);
            }
            
        }

        postData(body)
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('Network status is not 200');
            }
            successMessage();
        })
        .catch(errorMessage);

    });
};

export default sendForm;