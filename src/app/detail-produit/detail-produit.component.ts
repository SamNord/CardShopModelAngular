import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  product = [];
  id;
  exist = false;
  quantity = 1;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.data.produits.forEach(elt => {
      if (elt.id == this.id) {
        this.product.push(elt);
      }
    });

    console.log(this.data.productPanier)
  }

  addInPanier = (id) => {
    //rechercher produit par son id
    let produit = this.data.produits.find(elt => elt.id == id);
    //je cherche le produit s'il existe dans le panier
  let prodInPanier = this.data.productPanier.find(elt => elt.id == id)
//s'il existe, j'augmente la quantité
    if(prodInPanier != null) {  
        prodInPanier.qty++;
      } 
      //sinon je l'ajoute au panier
      else {
        this.data.productPanier.push({id :produit.id, nom : produit.titre, qty : 1, prix : produit.prix, img : produit.image})        
      }   
 
 console.log(this.data.productPanier)
    // this.data.obsQty.next(1);
    alert("produit ajouté");
 
  }

}
