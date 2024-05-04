/* aparece y desaparece el menu de escritorio */
const menuemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
/* aparece y desaparece el menu movil */
const buhoicon = document.querySelector(".menu");
const mobilemenu = document.querySelector(".mobile-menu");
/* aparece y desaparece el menu carrito de compras */
const menucarritoicon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardscontainer = document.querySelector(".cards-container");


menuemail.addEventListener("click",toggledesktopmenu);/* toggle para intercambiar aparece y desaparece */	
buhoicon.addEventListener("click",togglemobilemenu); /* toggle para intercambiar aparece y desaparece */
menucarritoicon.addEventListener("click",toggleCarritoAside); /* toggle para intercambiar aparece y desaparece */

function toggledesktopmenu(){
  
  desktopmenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}

function togglemobilemenu(){
 const isasideclosed = aside.classList.contains("inactive"); 
  
 if(!isasideclosed){
  aside.classList.add("inactive");
 }
  mobilemenu.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}
function toggleCarritoAside(){
  const ismobilemenuclosed = mobilemenu.classList.contains("inactive");
    
   if (!ismobilemenuclosed){
    mobilemenu.classList.add("inactive");
  }//abrir el aside
aside.classList.toggle("inactive");/* permite intercambiar entre activo y inactivo */
}

const productlist= [];
productlist.push({
  name:"Bike",
  price:120,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productlist.push({
  name:"pantalla",
  price:220,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productlist.push({
  name:"computador",
  price:620,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */
for (product of productlist){
const productcard = document.createElement("div");
productcard.classList.add("product-card");  

const productimg = document.createElement("img");
productimg.setAttribute("src",product.image);

const productinfo = document.createElement("div");
productinfo.classList.add("product-info");

const productinfodiv = document.createElement("div");

const productprice= document.createElement("p");
productprice.innerText="$" + product.price;

const productname= document.createElement("p");
productname.innerText=product.name;

productinfodiv.appendChild(productprice);
productinfodiv.appendChild(productname);

const productinfofigure = document.createElement("figure");
const productimgcart = document.createElement("img");
productimgcart.setAttribute("src","./icons/bt_add_to_cart.svg");

productinfofigure.appendChild(productimgcart);

productinfo.appendChild(productinfodiv);
productinfo.appendChild(productinfofigure);

productcard.appendChild(productimg);
productcard.appendChild(productinfo);

cardscontainer.appendChild(productcard);
}
for (product of productlist){
  const productcard = document.createElement("div");
  productcard.classList.add("product-card");  
  
  const productimg = document.createElement("img");
  productimg.setAttribute("src",product.image);
  
  const productinfo = document.createElement("div");
  productinfo.classList.add("product-info");
  
  const productinfodiv = document.createElement("div");
  
  const productprice= document.createElement("p");
  productprice.innerText="$" + product.price;
  
  const productname= document.createElement("p");
  productname.innerText=product.name;
  
  productinfodiv.appendChild(productprice);
  productinfodiv.appendChild(productname);
  
  const productinfofigure = document.createElement("figure");
  const productimgcart = document.createElement("img");
  productimgcart.setAttribute("src","./icons/bt_add_to_cart.svg");
  
  productinfofigure.appendChild(productimgcart);
  
  productinfo.appendChild(productinfodiv);
  productinfo.appendChild(productinfofigure);
  
  productcard.appendChild(productimg);
  productcard.appendChild(productinfo);
  
  cardscontainer.appendChild(productcard);
  }s