import "./../scss/style.scss"
import { EnergyDrink } from "./modules/EnergyDrink"


const energy = new EnergyDrink("Red Bull", "Original", 35.5, 18.95);
const energy2 = new EnergyDrink("Red Bull", "Blue", 25, 15.95);
const energy3 = new EnergyDrink("Monster", "Ultra Zero", 50, 19.95);
const energy4 = new EnergyDrink("PowerKing", "Watermelon", 25, 9.95);
const energy5 = new EnergyDrink("NOCCO", "Juicy Melba", 33, 22.95);


const energyDrinks = [energy, energy2, energy3, energy4, energy5];


console.log(energyDrinks);




