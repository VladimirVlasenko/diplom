const burgerMenu = () => {
    const topMenu = document.querySelector('.top-menu');
    const popupMenu = document.querySelector('.popup-menu');
    const body = document.querySelector('body');
    const toTop = document.querySelector('#totop'); 
    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('img[src="images/menu-button.png"]')) {
            popupMenu.style.display = 'flex';
        } else if (target.matches('img[src="images/delete.png"]')) {
            popupMenu.style.display = 'none';
        } else if (target.closest('.scroll')) {
            popupMenu.style.display = 'none';
        }
    });
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
            z-index: 2;

        `;
        }
        if(window.pageYOffset > 600) {
            toTop.style.cssText = `
                display: block;
            `;
        }
        if(window.pageYOffset < 600) {
            toTop.style.cssText = `
            display: none;
        `;
        }
      });
};

export default burgerMenu;