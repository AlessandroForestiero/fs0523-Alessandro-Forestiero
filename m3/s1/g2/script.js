"use strict";
class Account {
    constructor(balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
    }
    deposit(denaro) {
        this.balanceInit += denaro;
    }
    withDraw(denaro) {
        this.balanceInit -= denaro;
    }
}
class MadreAccount extends Account {
    addInterest() {
        this.balanceInit += this.balanceInit * 0.1;
    }
}
class SonAccount extends Account {
    constructor(balanceInit, sonProprieta) {
        super(balanceInit);
        this.sonProprieta = sonProprieta;
    }
}
let madre = new MadreAccount(10);
let figlio = new SonAccount(5, "ciao");
console.log(madre.balanceInit);
console.log(figlio.balanceInit);
madre.addInterest();
console.log(madre.balanceInit);
//# sourceMappingURL=script.js.map