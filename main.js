/* aparece y desaparece el menu de escritorio */
const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
/* aparece y desaparece el menu movil */
const buhoicon = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");
/* aparece y desaparece el menu carrito de compras */
const menucarritoicon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


menuemail.addEventListener("click",toggledesktopmenu);/* toggle para intercambiar aparece y desaparece */	
buhoicon.addEventListener("click",togglemobilemenu); /* toggle para intercambiar aparece y desaparece */
menucarritoicon.addEventListener("click",toggleaside); /* toggle para intercambiar aparece y desaparece */
function toggledesktopmenu(){
  
  desktopmenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}

function togglemobilemenu(){
  
  mobilemenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}
function toggleaside(){
  
  aside.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}