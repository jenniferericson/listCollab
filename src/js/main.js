import "./../scss/style.scss"
import { Cat } from "./modules/Cat"

const app = document.getElementById("app");

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

}