//Grocery Class
var Grocery = /** @class */ (function () {
    function Grocery(name, qty, unit, brand) {
        this.name = name;
        this.qty = qty;
        this.unit = unit;
        this.brand = brand;
    }
    return Grocery;
}());
function loadGrocery() {
    // my favorite foods
    var groceryList = [new Grocery("Spam", 1, "case", "Hormel"),
        new Grocery("Sardines", 1, "case", "Ligo"),
        new Grocery("Anchovy Paste (Sweet)", 5, "bottles", "Bario Fiesta"),
        new Grocery("Fish Sauce", 5, "Bottles", "Pufina"),
        new Grocery("Salted Eggs", 1, "Dozen", "Any"),
        new Grocery("Pork Skin", 4, "Bags", "Lapid")];
    // List all my food!!!
    groceryList.forEach(function (i) {
        document.body.innerHTML += i.name + ": " + String(i.qty) + " " + i.unit + " " + i.brand + "<br>";
    });
}
