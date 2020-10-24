
//Grocery Class
class Grocery {
    name: string;
    qty: number;
    unit: string;
    brand: string;
    imgUrl: string;

    constructor(name: string, qty: number, unit: string, brand: string, imgUrl: string) {
        this.name = name;
        this.qty = qty;
        this.unit = unit;
        this.brand = brand; 
        this.imgUrl = imgUrl;
    }
}

function loadGrocery() {
    // my favorite foods
    let groceryList = [new Grocery("Spam", 1, "case","Hormel","spam.jpg"),
    new Grocery("Sardines", 1, "case","Ligo","sardines.jpg"),
    new Grocery("Anchovy Paste (Sweet)", 5, "bottles","Bario Fiesta","bagoong.jpg"),
    new Grocery("Fish Sauce", 5, "Bottles","Pufina","patis.jpg"),
    new Grocery("Salted Eggs", 1, "Dozen","Any","itlog.jpg"),
    new Grocery("Pork Skin", 4, "Bags","Lapid","chicharon.jpg")]

    // List all my food!!!
    document.body.innerHTML += "<ul>";
    groceryList.forEach(function (i) {
        document.body.innerHTML += "<li>" + i.name + ": " + String(i.qty) + " " + i.unit + " " + i.brand + "<img src=img/" + i.imgUrl + " width=50px height=50px></li>";
    });
    document.body.innerHTML += "</ul>";
}