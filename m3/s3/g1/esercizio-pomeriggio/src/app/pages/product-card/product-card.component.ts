import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prod } from '../../models/prod';
import { ProdService } from '../../prod.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  constructor(private prodSvc:ProdService){}
@Output() savePref=new EventEmitter<Prod>();
@Input() prod!:Prod;
addProdPref(id:number):void{
  this.prodSvc.getById(id).subscribe(res=>(this.savePref.emit(res)))
}
}
