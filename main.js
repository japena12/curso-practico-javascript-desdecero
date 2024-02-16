const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const buhoicon = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");

menuemail.addEventListener("click",toggledesktopmenu);/* toggle para intercambiar */	
buhoicon.addEventListener("click",togglemobilemenu);

function toggledesktopmenu(){
  
  desktopmenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}

function togglemobilemenu(){
  
  mobilemenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}
