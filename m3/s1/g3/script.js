"use strict";
class Lavoratore {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    get getCodredd() {
        return this.codredd;
    }
    get getTasseInps() {
        return this.tasseinps;
    }
    get getTasseIrpef() {
        return this.tasseirpef;
    }
    get getRedditoAnnuoLordo() {
        return this.redditoannuolordo;
    }
}
class LavoratoreA extends Lavoratore {
    constructor(codredd, redditoannuolordo) {
        super(codredd, redditoannuolordo, redditoannuolordo * 0.1, redditoannuolordo * 0.2);
    }
    getUtileTasse() {
        return this.getRedditoAnnuoLordo - this.getTasseIrpef - this.getTasseInps;
    }
}
let lavoratoreA = new LavoratoreA(1, 1305);
console.log(lavoratoreA.getUtileTasse());
