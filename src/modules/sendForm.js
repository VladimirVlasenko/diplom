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
    display: flex;
    margin: 0 auto;
    align-items: center;
    `;
    const loadMessage = 'Загрузка...';
    const formContent = document.querySelector('.form-content');
    let popup = document.querySelectorAll('.popup');
    let thanks = document.querySelector('#thanks');
    
    bodyTag.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        // const checkbox = target.parentNode.querySelector('#check');
        // const checkbox2 = target.parentNode.querySelector('#check2');
        // const cardCheck = target.parentNode.querySelector('#card-check');
        // const checkbox1 = target.parentNode.querySelector('#check1');
        // let checkboxMessage = document.createElement('p');
        // checkboxMessage.textContent = 'Поставьте галочку, чтобы данные отправились!';

        // if (checkbox) {
        //     if(checkbox.checked) {target.appendChild(checkboxMessage);} else{target.removeChild(checkboxMessage);}
        // }
        // if (checkbox1) {
        //     if(checkbox1.checked) {target.appendChild(checkboxMessage);} else{target.removeChild(checkboxMessage);}
        // }
        // if (checkbox2) {
        //     if(checkbox2.checked) {target.appendChild(checkboxMessage);} else{target.removeChild(checkboxMessage);}
        // }
        // if (cardCheck) {
        //     if(cardCheck.checked) {target.appendChild(checkboxMessage);} else{target.removeChild(checkboxMessage);}
        // }


        let successMessage = () => {
            statusMessage.textContent = 'Данные успешно отправлены!';

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
            }, 5000);
                
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
            statusMessage.textContent = loadMessage;
            statusMessage.style.color = 'white';
            if (target.closest('.popup')) {
                let elements = target.children;
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                }
            }

            target.appendChild(statusMessage);
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