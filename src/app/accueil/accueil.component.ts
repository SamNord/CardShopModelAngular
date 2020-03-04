import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
products;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.products = this.data.produits;
  }

  GetSliders = (isFirst, isLast, isEven, isOdd) => {
    return {
      active : isFirst,
      lastActive : isLast,
      even : isEven,
      odd : isOdd
    };
  }
}
