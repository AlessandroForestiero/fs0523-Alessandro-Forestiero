"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CapoAbbigliamento {
    constructor(id, codprod, collezione, capi, modello, quantita, colore, prezzoivasesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capi = capi;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivasesclusa = prezzoivasesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    get getSaldoCapo() {
        return this.saldo;
    }
    get getAcquistoCapo() {
        return this.prezzoivainclusa - this.saldo;
    }
}
let capiAbbigliamento = [];
function getCapiAbbigliamento() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('https://655f6e42879575426b455544.mockapi.io/abbigliamento/capo');
        capiAbbigliamento = yield response.json();
        console.log(capiAbbigliamento);
    });
}
getCapiAbbigliamento();
