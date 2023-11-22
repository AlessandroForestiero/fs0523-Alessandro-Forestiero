abstract class Lavoratore {
  constructor(private codredd: number, private redditoannuolordo: number, private tasseinps: number, private tasseirpef: number) {}

  abstract getUtileTasse(): number;

  get getCodredd(): number {
    return this.codredd;
  }

  get getTasseInps(): number {
    return this.tasseinps;
  }

  get getTasseIrpef(): number {
    return this.tasseirpef;
  }
  get getRedditoAnnuoLordo(): number {
    return this.redditoannuolordo;
  }
}

class LavoratoreA extends Lavoratore {
  constructor(codredd: number, redditoannuolordo: number) {
    super(codredd, redditoannuolordo, redditoannuolordo * 0.1, redditoannuolordo * 0.2);
  }
  getUtileTasse(): number {
    return this.getRedditoAnnuoLordo - this.getTasseIrpef - this.getTasseInps;
  }
}

let lavoratoreA = new LavoratoreA(1, 1305);
console.log(lavoratoreA.getUtileTasse())