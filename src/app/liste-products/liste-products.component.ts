import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-liste-products',
  templateUrl: './liste-products.component.html',
  styleUrls: ['./liste-products.component.css']
})
export class ListeProductsComponent implements OnInit {
category;
products = [];
type;
  constructor(private data : DataService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.params.type;
    console.log(this.type)
  this.data.produits.forEach(element => 
    {
      if(element.cat == this.type) {
      this.products.push(element)
      }
    })
 
  }



}
