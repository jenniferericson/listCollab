import "./../scss/style.scss"
import { Cat } from "./modules/Cat"

const app = document.getElementById("app2");

const cat1 = new Cat("Lizie", "Barn Cat", "Black", "Yellow");
const cat2 = new Cat("Disney", "Maine Coon", "White", "Blue");
const cat3 = new Cat("Zoey", "Norwegian Forest Cat", "Grey", "Yellow");
const cat4 = new Cat("Sally", "Maine Coon", "Grey", "Yellow");
const cat5 = new Cat("Zelda", "Barn Cat", "White and Black", "Yellow");

const cats = [cat1, cat2, cat3, cat4, cat5];

const list = document.createElement("ul");
for (let i = 0; i < cats.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "listedCat";
    //listItem.className="cat" + i;
    listItem.innerHTML = (cats[i].toString());
    list.appendChild(listItem);
    app.appendChild(list);

}import { Skincare } from "./modules/skincare"

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



