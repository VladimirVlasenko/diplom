const calculator = () => {
    let cards = document.querySelector('#cards');
    let time = document.querySelector('.time');
    let months = time.querySelectorAll('input');
    let clubs = cards.querySelectorAll('.club');
    let clubMozaika = document.querySelector('#card_leto_mozaika');
    let clubSchelkovo = document.querySelector('#card_leto_schelkovo');
    let promoCode = document.querySelector('.promo-code');
    const body = document.querySelector('body');
    let price = document.querySelector('#price-total');
    const defaultPrice = 1999;
    price.textContent = defaultPrice;
    console.log(clubs[1].checked);

    body.addEventListener('input', (event) => {
        let target = event.target;
        if (target.matches('#m1')) {
            if (promoCode.value === "ТЕЛО2019") {
                if(clubMozaika.checked === true) {
                    price.textContent = Math.round(1999 * 0.7); 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = Math.round(2999 * 0.7); 
                }
            } else {
                if(clubMozaika.checked === true) {
                    price.textContent = 1999; 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = 2999; 
                }
            }
        }
        if (target.matches('#m2')) {
            if (promoCode.value === "ТЕЛО2019") {
                if(clubMozaika.checked === true) {
                    price.textContent = Math.round(9900 * 0.7); 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = Math.round(14990 * 0.7); 
                }
            } else {
                if(clubMozaika.checked === true) {
                    price.textContent = 9900; 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = 14990; 
                }
            }
        }
        if (target.matches('#m3')) {
            if (promoCode.value === "ТЕЛО2019") {
                if(clubMozaika.checked === true) {
                    price.textContent = Math.round(13900 * 0.7); 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = Math.round(21990 * 0.7); 
                }
            } else {
                if(clubMozaika.checked === true) {
                    price.textContent = 13900; 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = 21990; 
                }
            }
        }
        if (target.matches('#m4')) {
            if (promoCode.value === "ТЕЛО2019") {
                if(clubMozaika.checked === true) {
                    price.textContent = Math.round(19900 * 0.7); 
                }
                if(clubSchelkovo.checked === true) {
                    price.textContent = Math.round(24990 * 0.7); 
                }
            } else {
                if(clubMozaika.checked === true) {
                    price.textContent = 19900; 
                }
                if(clubSchelkovo.checked24990true) {
                    price.textContent = 24990; 
                }
            }
        }
        if(target.matches('.promo-code')) {
            if (target.value === 'ТЕЛО2019') {
                if(clubMozaika.checked === true) {
                    if (months[0].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(1999 * 0.7);}
                    if (months[1].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(9900 * 0.7);}
                    if (months[2].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(13900 * 0.7);}
                    if (months[3].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(19900 * 0.7);}
                }
                if (clubSchelkovo.checked === true) {
                    if (months[0].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(2999 * 0.7);}
                    if (months[1].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(14990 * 0.7);}
                    if (months[2].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(21990 * 0.7);}
                    if (months[3].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(24990 * 0.7);}
                }

            } else {
                if(clubMozaika.checked === true) {
                    if (months[0].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(1999);}
                    if (months[1].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(9900);}
                    if (months[2].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(13900);}
                    if (months[3].checked === true && clubMozaika.checked === true)
                     {price.textContent = Math.round(19900);}
                }
                if (clubSchelkovo.checked === true) {
                    if (months[0].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(2999);}
                    if (months[1].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(14990);}
                    if (months[2].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(21990);}
                    if (months[3].checked === true && clubSchelkovo.checked === true)
                     {price.textContent = Math.round(24990);}
                }
            }
        }
        if(target.matches('#card_leto_schelkovo')) {
            if (months[0].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 2999;}
            if (months[1].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 14990;}
            if (months[2].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 21990;}
            if (months[3].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 24990;}

            if (months[0].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(2999 *0.7);}
            if (months[1].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(14990 *0.7);}
            if (months[2].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(21990 *0.7);}
            if (months[3].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(24990 *0.7);}

        }
        if(target.matches('#card_leto_mozaika')) {
            if (months[0].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 1999;}
            if (months[1].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 9900;}
            if (months[2].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 13900;}
            if (months[3].checked === true && promoCode.value !== 'ТЕЛО2019')
             {price.textContent = 19900;}

            if (months[0].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(1999 * 0.7);}
            if (months[1].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(9900 * 0.7);}
            if (months[2].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(13900 * 0.7);}
            if (months[3].checked === true && promoCode.value === 'ТЕЛО2019')
             {price.textContent = Math.round(19900 * 0.7);}

        } 


    });
};
export default calculator;