const carusel = () => {
    let arrow = document.createElement('div');
    arrow.classList.add('slider-arrow');
    let services = document.querySelector('#services');
    let mainWrapper = services.querySelector('.wrapper');
    mainWrapper.style.position = 'relative';

    mainWrapper.appendChild(arrow);
    let left = document.createElement('button');
    left.classList.add('prev');
    let arL = document.createElement('div');
    left.appendChild(arL);
    arL.style.cssText = `
    position: absolute;
    top: -33%;
    left: 0%;
    color: white;
    `;
    arL.textContent = "⇐";
    left.style.cssText = `
    display: flex;
    font-size: 35px;
    width: 36px;
    height: 37px;
    background-color: #f4c71b;
    border-radius: 50%;
    text-align: center;
    padding-top: 11px;
    position: absolute;
    left: 2px;
    top: 37%;
    `;
    mainWrapper.appendChild(left);
    let right = document.createElement('button');
    right.classList.add('next');
    let arR = document.createElement('div');
    right.appendChild(arR);
    arR.textContent = '⇒';
    arR.style.cssText = `
    position: absolute;
    top: -33%;
    right: 0%;
    color: white;
    `;
    right.style.cssText = `
    display: flex;
    align-items: center;
    vertical-align: center;
    font-size: 35px;
    width: 36px;
    height: 37px;
    background-color: #f4c71b;
    border-radius: 50%;
    text-align: center;
    padding-top: 11px;
    position: absolute;
    right: 2px;
    top: 37%;
    `;
    mainWrapper.appendChild(right);



    const options = {
        main: '.wrapper',
        wrap: '.services-slider',
        prev: '.prev',
        next: '.next',
        slidesToShow: 4,
        infinity: true,
        responsive: [{
            breakpoint: 1024, 
            slidesToShow: 3,
        },
        {
            breakpoint: 768, 
            slidesToShow: 2,
        },
        {
            breakpoint: 576, 
            slidesToShow: 1,
        }
    ]
    };
    class SliderCarusel {

        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = true,
            position = 0,
            slidesToShow = 2,
            responsive = []

        }){
            if(!main || !wrap) {
                console.warn('slider-carusel: необходимо 2 свойства, "main" и "wrap"');
            }
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev  = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow),
                maxPosition: this.slides.length - this.slidesToShow
            };
            this.responsive = responsive;
        }
        init() {

            this.addGloClass();
            this.addStyle();

            if(this.prev && this.next) {
                this.controlSlider();
            } else {
                this.addArrow();
                this.controlSlider();
            }
            if (this.responsive) {
                this.responseInit();
            }
            
        }
        addGloClass() {

            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for( const item of this.slides) {
                item.classList.add('glo-slider__item');
            }
        }
        addStyle() {
            
            let style = document.getElementById('sliderCarusel-style');
            if(!style) {
                style = document.createElement('style');
                style.id = 'sliderCarusel-style';
            }
            
            style.textContent = `
            .glo-slider {
                overflow: hidden;
            }
            .glo-slider__wrap {
                display: flex;
                transition: transform 0.5s;
                will-change: transform;
            }
            .glo-slider__item {
                display: block; !important
                align-items: center; !important
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}%;
                margin: auto 0 !important;
            }
            `;
            document.head.appendChild(style);
        }
        controlSlider() {
            this.prev.addEventListener('click', this.prevSlider.bind(this));
            this.next.addEventListener('click', this.nextSlider.bind(this));
        }
        prevSlider(){
            if(this.options.infinity || this.options.position > 0) {
                --this.options.position;
                if (this.options.position < 0) {
                    this.options.position =  this.options.maxPosition;
                }
                this.wrap.style.transform = `translateX(-${this.options.position *
                    this.options.widthSlide}%)`;
            }
        }
        nextSlider() {
            if (this.options.infinity || this.options.position < this.options.maxPosition) {
                ++this.options.position;
                if(this.options.position >  this.options.maxPosition) {
                    this.options.position = 0;
                }
                this.wrap.style.transform = `translateX(-${this.options.position *
                    this.options.widthSlide}%)`;
            }
            
        }
        addArrow() {
            this.prev = document.createElement('button');
            this.next = document.createElement('button');
            this.prev.className = 'glo-slider__prev';
            this.next.className = 'glo-slider__next';
            this.main.appendChild(this.prev);
            this.main.appendChild(this.next);

            const style = document.createElement('style');
            style.textContent = `
            .glo-slider__prev {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                border-right-color: #19b5fe ;
            }
            .glo-slider__next {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                border-left-color: #19b5fe;
            }
            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus {
                background:transparent;
                outline:transparent;
            }
            `;
            document.head.appendChild(style);

        }
        responseInit(){
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);

            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for(let i = 0; i < allResponse.length; i++) {
                        if(widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        } 
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };
            checkResponse();
            window.addEventListener('resize', checkResponse);
        }
    }
    const carusel = new SliderCarusel(options);
    carusel.init();
};
export default carusel;