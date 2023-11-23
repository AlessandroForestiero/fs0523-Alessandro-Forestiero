class CapoAbbigliamento {
  constructor(
    private id: number,
    private codprod: number,
    private collezione: string,
    private capi: string,
    private modello: number,
    private quantita: number,
    private colore: string,
    private prezzoivasesclusa: number,
    private prezzoivainclusa: number,
    private disponibile: string,
    private saldo: number
  ) {}
  get getSaldoCapo(): number {
    return this.saldo;
  }
  get getAcquistoCapo(): number {
    return this.prezzoivainclusa - this.saldo;
  }
}
let capiAbbigliamento: CapoAbbigliamento[] = [];
async function getCapiAbbigliamento() {
  let response = await fetch('https://655f6e42879575426b455544.mockapi.io/abbigliamento/capo');
  capiAbbigliamento=await response.json()
  console.log(capiAbbigliamento);
  
}


 getCapiAbbigliamento()
