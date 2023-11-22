 class Account {
   balanceInit: number = 0;
  constructor(balanceInit: number) {
    this.balanceInit = balanceInit;
  }
  deposit(denaro: number): void {
    this.balanceInit += denaro;
  }
  withDraw(denaro: number): void {
    this.balanceInit -= denaro;
  }
}

class MadreAccount extends Account {
  addInterest(): void {
    this.balanceInit += this.balanceInit * 0.1;
  }
}

class SonAccount extends Account {
  sonProprieta: string;
  constructor(balanceInit: number, sonProprieta: string) {
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
