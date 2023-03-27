const naviMenu = document.querySelector(".navigation_menu");
const headerMenu = document.querySelector(".header_menu_icon");
const menuClose = document.querySelector(".navigation_menu-closeIcon");
headerMenu.onclick = function (){
    naviMenu.style.display = "flex";
}
menuClose.onclick = function (){
    naviMenu.style.display = "none";
}