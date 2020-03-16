const gallery = () => {
    let galleryS = document.querySelector('#gallery'),
          slide = galleryS.querySelectorAll('.slide'),
          slider = document.querySelector('.gallery-slider');
          let dot;
          

          
    let ulDots = document.querySelector('.slider-dots');
    let createDots = () => {
        for(let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            ulDots.appendChild(li); 
            li.classList.add('dot'); 
            ulDots = document.querySelector('.slider-dots');
        }
        dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');
    };

    createDots();


    let currentSlide = 0;
    let interval;
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'gallery-item-active' );
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'gallery-item-active' );
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        
        

        if(!target.closest('.portfolio-btn, .dot')) {
            return;
        }
        
        prevSlide(slide, currentSlide, 'gallery-item-active' );
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.closest('.slider-arrow.next')) {
            currentSlide++;
        } else if (target.closest('.slider-arrow.prev')) {
            currentSlide--;
        } else if (target.matches('.dot')) {

            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1 ;
        }
        nextSlide(slide, currentSlide, 'gallery-item-active' );
        nextSlide(dot, currentSlide, 'dot-active');
    });
    slider.addEventListener('mouseover', (event) => {
        if (event.target.closest('.portfolio-btn') || event.target.matches('.dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.closest('.portfolio-btn') || event.target.matches('.dot')) {
            startSlide();
        }
    });
    startSlide(2000);
};
export default gallery;