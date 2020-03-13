const burgerMenu = () => {
    let topMenu = document.querySelector('.top-menu');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 50) {
            topMenu.style.cssText = `
            margin-top: 0px;
            meargin-right: 0px;
            position: fixed;
            opacity: 60%;
            `;
        }
        if(window.pageYOffset < 100) {
            topMenu.style.cssText = `
            position: relative;
            opacity: 100%;
            display: block;

        `;
        }
      });
};

export default burgerMenu;