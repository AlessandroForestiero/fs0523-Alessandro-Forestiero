"use strict";
class Pizza {
    constructor(gusto, prezzo, disponibility) {
        this.gusto = gusto;
        this.prezzo = prezzo;
        this.disponibility = disponibility;
    }
}
class PizzaSuper extends Pizza {
    constructor(gusto, prezzo, disponibility, altriIngredienti, fettePizza) {
        super(gusto, prezzo, disponibility);
        this.altriIngredienti = altriIngredienti;
        this.fettePizza = fettePizza;
    }
}
let PizzaSuperA = new PizzaSuper('margherita', 10, false, 'alici', 5);
console.log(PizzaSuperA);
