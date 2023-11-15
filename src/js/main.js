import "./../scss/style.scss"
import { Skincare } from "./modules/skincare"

const productOne = new Skincare("Paulas Choice", "BHA", "100 ml", 599);

const productTwo = new Skincare("Aco", "Moisturizer", "50 ml", 299);

const productThree = new Skincare("Klairs", "Toner", "100 ml", 399);

const productFour = new Skincare("Medik8", "Serum", "30 ml", 799);

const products = [productOne,productTwo,productThree,productFour];

