const validateForms = () => {
    const body = document.querySelector('body');
    body.addEventListener('input', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.matches('input[name="phone"]')) {
            target.value = target.value.replace(/[^\+\d]/g, '');
            let length = target.value.length;
            if (length > 12) {
                target.value = 'Введите номер вида +70001112233';
            }
            if(target.value === 'Введите номер вида +70001112233' || target.value === '+70001112233') {
                document.addEventListener('keydown', function(event) {
                    if (event.code === 'Backspace') {
                      target.value = '';
                    }
                  });
            }
        }
         else if (target.matches('input[name="name"]') && !target.matches('.promo-code')) {
            target.value = target.value.replace(/[^а-яА-Я ]/, '');
            let length = target.value.length;
            if (length > 30) {
                target.value = 'Не более тридцати знаков';
            }
            if(target.value === 'Не более тридцати знаков') {
                document.addEventListener('keydown', function(event) {
                    if (event.code === 'Backspace') {
                        target.value = '';
                    }
                  });
            }
        } 

    });
};
export  default validateForms;