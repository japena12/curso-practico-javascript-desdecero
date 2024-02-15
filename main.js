const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

menuemail.addEventListener("click",toggledesktopmenu);/* toggle para intercambiar */	

function toggledesktopmenu(){
  
  desktopmenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}
console.log("funcionando");
