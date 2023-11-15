export class Cat {
    name;
    breed;
    furColor;
    eyeColor;

    constructor(name, breed, furColor, eyeColor) {
        this.name = name;
        this.breed = breed;
        this.furColor = furColor;
        this.eyeColor = eyeColor;
    }

    toString() {
        return "HEWWOO :33 MY NAME IS " + this.name + " AN IM A " + this.breed + " MY FUR IS COLORED " + this.furColor + " AND MY EYES ARE " + this.eyeColor;
    }

}

function Meow() {
    console.log("MEOW my name is " + this.name);
}
