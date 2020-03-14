const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
          p = slider.querySelectorAll('p'),
          slide = slider.querySelectorAll('.slide');
          
    let currentSlide = 0;
    let interval;
    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };
    const nextSlide = (elem, index) => {
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
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
        
        prevSlide(slide, currentSlide);

        if (target.closest('.slide')) {
            currentSlide++;
        } 

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1 ;
        }
        nextSlide(slide, currentSlide);
    });
    slider.addEventListener('mouseenter', (event) => {
        stopSlide();

    });
    slider.addEventListener('mouseleave', (event) => {
        startSlide();
    });
    startSlide(2000);
};

export default mainSlider;