
//Grocery Class
class Grocery {
    name: string;
    qty: number;
    unit: string;
    brand: string;

    constructor(name: string, qty: number, unit: string, brand: string) {
        this.name = name;
        this.qty = qty;
        this.unit = unit;
        this.brand = brand; 
    }
}

function loadGrocery() {
    // my favorite foods
    let groceryList = [new Grocery("Spam", 1, "case","Hormel"),
    new Grocery("Sardines", 1, "case","Ligo"),
    new Grocery("Anchovy Paste (Sweet)", 5, "bottles","Bario Fiesta"),
    new Grocery("Fish Sauce", 5, "Bottles","Pufina"),
    new Grocery("Salted Eggs", 1, "Dozen","Any"),
    new Grocery("Pork Skin", 4, "Bags","Lapid")]

    // List all my food!!!
    groceryList.forEach(function (i) {
        document.body.innerHTML += i.name + ": " + String(i.qty) + " " + i.unit + " " + i.brand + "<br>";
    });
}