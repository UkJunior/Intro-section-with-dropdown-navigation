const arrowDown = document.querySelectorAll('.arrowdown');
const iconMenu  = document.querySelector('.icon-menu');
const  collapsibleContainer = document.querySelector('.collapsible-container');
const closeIconMenu = document.querySelector('.close-icon-menu');
const shadowLayer = document.querySelector('.shadow');


// console.log(dropdownMenu);
console.log(arrowDown);
arrowDown.forEach((item) => {
    const dropdownMenu = document.querySelectorAll('.dropdown-menu');
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            item.nextElementSibling.classList.toggle('active');
        });
    });

    iconMenu.addEventListener('click', function(){
        collapsibleContainer.classList.toggle('active');
        shadowLayer.classList.toggle('active');
    });

    closeIconMenu.addEventListener('click', function(){
        collapsibleContainer.classList.toggle('active')
        shadowLayer.classList.toggle('active');
    });