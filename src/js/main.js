import "./../scss/style.scss"
import { Cat } from "./modules/Cat"
import { Skincare } from "./modules/skincare"
import { EnergyDrink } from "./modules/EnergyDrink"


const app = document.getElementById("app2");

const cat1 = new Cat("Lizie", "Barn Cat", "Black", "Yellow");
const cat2 = new Cat("Disney", "Maine Coon", "White", "Blue");
const cat3 = new Cat("Zoey", "Norwegian Forest Cat", "Grey", "Yellow");
const cat4 = new Cat("Sally", "Maine Coon", "Grey", "Yellow");
const cat5 = new Cat("Zelda", "Barn Cat", "White and Black", "Yellow");

const cats = [cat1, cat2, cat3, cat4, cat5];

const list = document.createElement("ul");
const catForm = document.createElement("form");


function renderCats(){
    app.innerHTML = "";
    for (let i = 0; i < cats.length; i++) {
        const listItem = document.createElement("li");
        listItem.className = "listedCat";
        //listItem.className="cat" + i;
        listItem.innerHTML = (cats[i].toString());
        list.appendChild(listItem);
        app.appendChild(list);
    
    
     const removeButton = document.createElement("button");
     removeButton.innerHTML="remove";
     removeButton.addEventListener("click", ()=>{
        cats.splice(i,1);
        renderCats();
     })
     listItem.appendChild(removeButton);
    }
}
renderCats();
/*
const newCatName = document.createElement("input");
const newCatBreed = document.createElement("input");
const newCatFurColor = document.createElement("input");
const newCatEyeColor = document.createElement("input");
const addCat = document.createElement("button");
catForm.appendChild(newCatName);
catForm.appendChild(newCatBreed);
catForm.appendChild(newCatFurColor);
catForm.appendChild(newCatEyeColor);
catForm.appendChild(addCat)
app.appendChild(catForm);
*/
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





const energy = new EnergyDrink("Red Bull", "Original", 35.5, 18.95);
const energy2 = new EnergyDrink("Red Bull", "Blue", 25, 15.95);
const energy3 = new EnergyDrink("Monster", "Ultra Zero", 50, 19.95);
const energy4 = new EnergyDrink("PowerKing", "Watermelon", 25, 9.95);
const energy5 = new EnergyDrink("NOCCO", "Juicy Melba", 33, 22.95);


const energyDrinks = [energy, energy2, energy3, energy4, energy5];



console.log(energyDrinks);

const theApp = document.getElementById("app3");
const drinksContainer = document.createElement("article");
drinksContainer.className = "drinkscontainer";
theApp.appendChild(drinksContainer);

const energyDrinksCreateHTML = () => {
  drinksContainer.innerHTML = "";

  energyDrinks.forEach((drink, i) => {
    const drinkContainer = document.createElement("section");
    const titles = document.createElement("section");
    const brand = document.createElement("h3");
    const flavour = document.createElement("h4");
    const details = document.createElement("section");
    const size = document.createElement("span");
    const price = document.createElement("span");

    drinkContainer.className = "drinkcontainer";
    titles.className = "titles";
    details.className = "details";
    brand.innerHTML = drink.brand;
    flavour.innerHTML = drink.flavour;
    size.innerHTML = drink.size + " cl";
    price.innerHTML = drink.price + " kr";

    drinkContainer.appendChild(titles);
    titles.appendChild(brand);
    titles.appendChild(flavour);
    drinkContainer.appendChild(details);
    details.appendChild(size);
    details.appendChild(price);
    drinksContainer.appendChild(drinkContainer);

    drinkContainer.addEventListener("click", () => {
      energyDrinks.splice(i, 1);
      energyDrinksCreateHTML();
    })
  })
}

energyDrinksCreateHTML();

// const drinkInputContainer = document.createElement("article");
// drinkInputContainer.className = "drinkinput";
// const brandInput = document.createElement("input");
// const flavourInput = document.createElement("input");
// const sizeInput = document.createElement("input");
// const priceInput = document.createElement("input");
// const drinkButton = document.createElement("button");
// drinkButton.innerHTML = "Lägg till dryck";

// drinkInputContainer.appendChild(brandInput);
// drinkInputContainer.appendChild(flavourInput);
// drinkInputContainer.appendChild(sizeInput);
// drinkInputContainer.appendChild(priceInput);
// drinkInputContainer.appendChild(drinkButton);

// theApp.appendChild(drinkInputContainer);

