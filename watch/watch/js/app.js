const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
console.log(burger)
console.log(menu)

burger.onclick = function(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
}