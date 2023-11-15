import "./../scss/style.scss"
import { EnergyDrink } from "./modules/EnergyDrink"


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

energyDrinks.forEach((drink) => {
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
});


