/* Fixed Header */

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    let scrollPos = 10;
    let header = document.querySelector(".header");

    if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
        header.classList.add("active");
    }else {
        header.classList.remove("active");
    }
}


// Toggle menu

const menuBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const navRight = document.querySelector(".nav__right");
if (menuBurger) {
    menuBurger.addEventListener("click", function (e){
        menuBurger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("lock");
    });
}

// scroll to sections

const menuLinks = document.querySelectorAll(".nav_link[data-scroll]")
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)

    });
    function onMenuLinkClick(e) {
        //ниже объект, на который мы кликнули, целевой объект
        const menuLink = e.target;
        //проверяем заполнен ли data атрибут и существует ли объект, на который ссылается атрибут
        if(menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {
            //помещаем в const сам объект
            const scrollBlock = document.querySelector(menuLink.dataset.scroll);
            //    высчитываем положение этого объекта с учетом высоты шапки
            //    scrollBlock.getBoundingClientRect().top - местоположение в пикселях
            //    pageYOffset - количество прокрученных пикселей
            //    document.querySelector("header").offsetHeight; - высота шапки
            const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector("header").offsetHeight;
            if (menuBurger.classList.contains("active")) {
                menuBurger.classList.remove("active");
                nav.classList.remove("active");
                body.classList.remove("lock");
            }
            window.scrollTo({
                top: scrollBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

    }
}

let research = document.querySelector(".research__link");
let wrap = document.querySelector(".wrap");
let input = document.querySelector(".input");

research.addEventListener("click",function (){
    wrap.classList.toggle("active");
    input.classList.toggle("active");

});

// Tabs

const tabsBtn = document.querySelectorAll(".link");
const tabsItems = document.querySelectorAll(".cards");


tabsBtn.forEach(function (item) {
    item.addEventListener("click",function (){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function (item){
            item.classList.remove("active");
        });

        tabsItems.forEach(function (item){
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");

    });
});
document.querySelector(".link").click();