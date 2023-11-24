interface Sim {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
}
type Chiamata = {
  id: number;
  durata: number;
  data: Date;
};
class Smartphone implements Sim {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;

  constructor(carica: number, numeroChiamate: number, costoMinuto: number, public registroChiamate: Chiamata[]) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
    this.costoMinuto = costoMinuto;
  }
  ricarica(euro: number): void {
    this.carica += euro;
  }
  numero404(): string {
    let saldoResiduo: string = `Il tuo saldo residuo è ${this.carica}`;
    return saldoResiduo;
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  chiamata(min: number): void {
    let costoChiamata: number = min * this.costoMinuto;
    if(this.carica>0){
    this.carica -= costoChiamata;
    this.registroChiamate.push({ id: this.numeroChiamate, durata: min, data: new Date() });
    this.numeroChiamate++;
  }}
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    this.registroChiamate = [];
  }
  mostraRegistroChiamate(): void {
    console.log(this.registroChiamate);
    
  }
  filtraChiamatePerDataOra(data: Date): void {
    let chiamatePerDataOra = this.registroChiamate.filter((chiamata) => {
      return chiamata.data.getFullYear() === data.getFullYear() &&
        chiamata.data.getDay() === data.getDay() &&
        chiamata.data.getHours() === data.getHours()
        ? true
        : false;
    });
    console.log(chiamatePerDataOra);
    
  }
}

let smartphone1: Smartphone = new Smartphone(20,0, 0.2, []);
console.log(`-Stato iniziale dello smartphone:`);
console.log(smartphone1);
console.log('-Effettuo la prima ricarica di 20:');
smartphone1.ricarica(20);
console.log(smartphone1);
console.log('-Chiedo il credito residuo:');
console.log(smartphone1.numero404());
console.log('-Effettuo una chiamata di 10 minuti al prezzo di 0.2 al minuto:');
smartphone1.chiamata(10);
console.log(smartphone1);
console.log('-Effettuo una chiamata di 20 minuti al prezzo di 0.2 al minuto:');
smartphone1.chiamata(20);
console.log(smartphone1);
console.log('-Chiedo il credito residuo:');
console.log(smartphone1.numero404());
console.log('-Controllo il numero di chiamate effettuate:');
console.log(smartphone1.getNumeroChiamate());
console.log('-Mostro il registro delle chiamate:');
smartphone1.mostraRegistroChiamate();
console.log('-Filtro le chiamate per data ed ora correnti:');
smartphone1.filtraChiamatePerDataOra(new Date());
console.log('-Filtro le chiamate per data ed ora passata (2023-11-24T09:00:00):');
smartphone1.filtraChiamatePerDataOra(new Date('2023-11-24T09:00:00'));
console.log('-Azzero il registro chiamate:');
smartphone1.azzeraChiamate();
console.log('-Mostro il registro delle chiamate:');
smartphone1.mostraRegistroChiamate();

console.error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');


let smartphone2: Smartphone = new Smartphone(10,0, 0.5, []);
console.log(`-Stato iniziale dello smartphone:`);
console.log(smartphone2);
console.log('-Effettuo la prima ricarica di 10:');
smartphone2.ricarica(10);
console.log(smartphone2);
console.log('-Chiedo il credito residuo:');
console.log(smartphone2.numero404());
console.log('-Effettuo una chiamata di 20 minuti al prezzo di 0.5 al minuto:');
smartphone2.chiamata(20);
console.log(smartphone2);
console.log('-Effettuo una chiamata di 5 minuti al prezzo di 0.2 al minuto:');
smartphone2.chiamata(5);
console.log(smartphone2);
console.log('-Chiedo il credito residuo:');
console.log(smartphone2.numero404());
console.log('-Controllo il numero di chiamate effettuate:');
console.log(smartphone2.getNumeroChiamate());
console.log('-Mostro il registro delle chiamate:');
smartphone2.mostraRegistroChiamate();
console.log('-Filtro le chiamate per data ed ora correnti:');
smartphone2.filtraChiamatePerDataOra(new Date());
console.log('-Filtro le chiamate per data ed ora passata (2023-11-24T15:09:49.061Z):');
smartphone2.filtraChiamatePerDataOra(new Date('2023-11-24T15:09:49.061Z'));
console.log('-Azzero il registro chiamate:');
smartphone2.azzeraChiamate();
console.log('-Mostro il registro delle chiamate:');
smartphone2.mostraRegistroChiamate();

console.error('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

let smartphone3: Smartphone = new Smartphone(0,0, 1, []);
console.log(`-Stato iniziale dello smartphone:`);
console.log(smartphone3);
console.log('-Effettuo la prima ricarica di 30:');
smartphone3.ricarica(30);
console.log(smartphone3);
console.log('-Chiedo il credito residuo:');
console.log(smartphone3.numero404());
console.log('-Effettuo una chiamata di 30 minuti al prezzo di 1 al minuto:');
smartphone3.chiamata(30);
console.log(smartphone3);
console.log('-Effettuo una chiamata di 5 minuti al prezzo di 1 al minuto:');
smartphone3.chiamata(5);
console.log('credito insufficiente');
console.log(smartphone3);
console.log('-Chiedo il credito residuo:');
console.log(smartphone3.numero404());
console.log('-Controllo il numero di chiamate effettuate:');
console.log(smartphone3.getNumeroChiamate());
console.log('-Mostro il registro delle chiamate:');
smartphone3.mostraRegistroChiamate();
console.log('-Filtro le chiamate per data ed ora correnti:');
smartphone3.filtraChiamatePerDataOra(new Date());
console.log('-Filtro le chiamate per data ed ora passata (2023-11-24T15:09:49.061Z):');
smartphone3.filtraChiamatePerDataOra(new Date('2023-11-24T15:09:49.061Z'));
console.log('-Azzero il registro chiamate:');
smartphone3.azzeraChiamate();
console.log('-Mostro il registro delle chiamate:');
smartphone3.mostraRegistroChiamate();