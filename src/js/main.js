import "./../scss/style.scss"
import { Skincare } from "./modules/skincare"

const productOne = new Skincare("Paulas Choice", "BHA", "100 ml", 599);

const productTwo = new Skincare("Aco", "Moisturizer", "50 ml", 299);

const productThree = new Skincare("Klairs", "Toner", "100 ml", 399);

const productFour = new Skincare("Medik8", "Serum", "30 ml", 799);

const products = [productOne,productTwo,productThree,productFour];

const divApp = document.getElementById("app");

for(let i = 0; i < products.length; i++) {

  let brandTag = document.createElement("h3");
  let typeTag = document.createElement("h4");
  let sizeTag = document.createElement("p");
  let priceTag = document.createElement("p");
  const container = document.createElement("div");

  brandTag.innerHTML = products[i].brand;
  typeTag.innerHTML = products[i].type;
  sizeTag.innerHTML = products[i].size;
  priceTag.innerHTML = products[i].price;
  
  divApp.appendChild(container);
  container.appendChild(brandTag);
  container.appendChild(typeTag);
  container.appendChild(sizeTag);
  container.appendChild(priceTag);
  
  container.className = "productContainer";
}



