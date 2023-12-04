import { Component, OnInit } from '@angular/core';
import { ProdService } from '../../prod.service';
import { Prod } from '../../models/prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public prodArr: Prod[] = [];
  public prodPref: Prod[] = [];
  public prodCarr: Prod[] = [];
  constructor(private prodSvc: ProdService) {}

  ngOnInit(): void {
    this.prodSvc.getAll().subscribe((res) => (this.prodArr = res.products));
  }
  savePref(prod: Prod) {
    if (!this.prodPref.includes(prod)) {
      this.prodPref.push(prod);
      console.log(this.prodPref);
    }
  }
}
