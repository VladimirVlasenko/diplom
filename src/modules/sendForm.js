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

    const loadMessage = 'Загрузка...';
    let bodyTag = document.querySelector('body');
    let allInputs = document.querySelectorAll('input');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
    const formContent = document.querySelector('.form-content');
    let popup = document.querySelectorAll('.popup');
    
    bodyTag.addEventListener('submit', (event) => {
        event.preventDefault();
        let target = event.target;
        let successMessage = () => {
            statusMessage.textContent = 'Данные успешно отправлены!';

            allInputs.forEach((item) => {
                item.value = '';
            });
            setTimeout(() => {
                statusMessage.textContent = '';
                if (target.closest('#free_visit_form')) {
                    target.innerHTML = `
                <h4>Записаться на визит</h4>
                <input type="hidden" name="form_name" value=" Записаться на визит">
                <p class="input-text"><input name="name" type="text" required placeholder="Ваше имя..."></p>
                <p class="input-text"><input type="tel" name="phone" id="callback_form2-phone" required
                                             placeholder="Ваш номер телефона..."></p>
                <p class="personal-data">
                    <input type="checkbox" required id="check2"><label for="check2">Я согласен на обработку <br>
                    персональных
                    данных</label>

                </p>
                <button name="send1" class="btn btn-send" type="submit">записаться</button>
                `;
                }
                if (target.closest('#callback_form')) {
                    target.innerHTML = `
                    <h4>Обратный звонок</h4>
                    <input type="hidden" name="form_name" value=" Обратный звонок">
                    <!--  <input type="hidden" name="club" value="<?=$_GET['club-name']?>"> -->
                    <p class="input-text"><input name="name" type="text" required placeholder="Ваше имя..."></p>
                    <p class="input-text"><input type="tel" name="phone" id="callback_form1-phone" required
                                                 placeholder="Ваш номер телефона..."></p>
                    <p class="personal-data">
                        <input type="checkbox" required id="check"><label for="check">Я согласен на обработку <br>
                        персональных
                        данных</label>
    
                    </p>
                    <button name="send1" class="btn btn-send" type="submit">Перезвоните мне</button>
                    `;
                }
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
            statusMessage.textContent = loadMessage;
            statusMessage.style.color = 'white';
            while (target.firstChild) {
                target.firstChild.remove();
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