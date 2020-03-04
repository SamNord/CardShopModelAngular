import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  categories = [
    {
      id: 1,
      type: 'Fruits',
      imageCat: 'assets/imagesCategory/catFruits.jpg',
    },
    {
      id: 2,
      type: 'Légumes',
      imageCat: 'assets/imagesCategory/catLegumes.jpg',
    },
    {
      id: 3,
      type: 'Epices',
      imageCat: 'assets/imagesCategory/epices.jpg',
    }
  ];

  produits = [
    {id :1, titre : 'Ananas', image : 'assets/fruits/ananas.jpg', prix : (3).toFixed(2), cat : 'Fruits'},
    {id :2, titre : 'Cerises', image : 'assets/fruits/cerises.jpg', prix : (6).toFixed(2), cat : 'Fruits'},
    {id :3, titre : 'Citron', image : 'assets/fruits/citron.jpg', prix : (2.50).toFixed(2), cat : 'Fruits'},
    {id :4, titre : 'Clémentines', image : 'assets/fruits/clementine.jpeg',prix : (3.10).toFixed(2), cat : 'Fruits'},
    {id :5, titre : 'Dattes Ajwa', image : 'assets/fruits/dattes_ajwa.jpeg', prix : (7.50).toFixed(2), cat : 'Fruits'},
    {id :6, titre : 'Dattes', image : 'assets/fruits/dattes.jpeg', prix : (5).toFixed(2), cat : 'Fruits'},
    {id :7, titre : 'Fraises', image : 'assets/fruits/fraises.jpeg', prix : (4.50).toFixed(2), cat : 'Fruits'},
    {id :8, titre : 'Framboises', image : 'assets/fruits/framboises.jpg', prix : (3.70).toFixed(2), cat : 'Fruits'},
    {id :9, titre : 'Fruits de la passion', image : 'assets/fruits/fruit_passion.jpg', prix : (3).toFixed(2), cat : 'Fruits'},
    {id :10, titre : 'Kiwi', image : 'assets/fruits/kiwi.jpg', prix : (2.70).toFixed(2), cat : 'Fruits'},
    {id :11, titre : 'Mangues', image : 'assets/fruits/mangue.jpg', prix : (2).toFixed(2), cat : 'Fruits'},
    {id :12, titre : 'Melon', image : 'assets/fruits/melon.jpg', prix : (1.50).toFixed(2), cat : 'Fruits'},
    {id :13, titre : 'Mûres', image : 'assets/fruits/mures.jpeg', prix : (3.10).toFixed(2), cat : 'Fruits'},
    {id :14, titre : 'Myrtilles', image : 'assets/fruits/myrtilles.jpeg', prix : (3.30).toFixed(2), cat : 'Fruits'},
    {id :15, titre : 'Noix de coco', image : 'assets/fruits/noix_coco.jpg', prix : (3.60).toFixed(2), cat : 'Fruits'},
    {id :16, titre : 'Oranges', image : 'assets/fruits/oranges.jpg', prix : (2.65).toFixed(2), cat : 'Fruits'},
    {id :17, titre : 'Pastèques', image : 'assets/fruits/pasteques.jpg', prix : (3).toFixed(2), cat : 'Fruits'},
    {id :18, titre : 'Poires', image : 'assets/fruits/poires.jpg',prix : (2.30).toFixed(2), cat : 'Fruits'},
    {id :19, titre : 'Pommes', image : 'assets/fruits/pommes_golden.jpg', prix : (2.50).toFixed(2), cat : 'Fruits'},
    {id :20, titre : 'Litchi', image : 'assets/fruits/litchi.jpg', prix : (3.80).toFixed(2), cat : 'Fruits'},
    {id :21, titre : 'Cannelle', image : 'assets/epices/cannelle.jpg', prix : (2).toFixed(2), cat : 'Epices'},
    {id :22, titre : 'Cumin', image : 'assets/epices/cumin.jpeg', prix : (1.50).toFixed(2), cat : 'Epices'},
    {id :23, titre : 'Curcuma', image : 'assets/epices/curcuma.jpg', prix : (2.50).toFixed(2), cat : 'Epices'},
    {id :24, titre : 'Clous de girofles', image : 'assets/epices/girofle.jpg', prix : (1.70).toFixed(2), cat : 'Epices'},
    {id :25, titre : 'Paprika', image : 'assets/epices/paprika.jpeg', prix : (1.60).toFixed(2), cat : 'Epices'},
    {id :26, titre : 'Poivre', image : 'assets/epices/poivre.jpeg', prix : (1.50).toFixed(2), cat : 'Epices'},
    {id :27, titre : 'Raz El Hannout', image : 'assets/epices/raz_el_hannout.jpg', prix : (2).toFixed(2), cat : 'Epices'},
    {id :28, titre : 'Safran', image : 'assets/epices/safran.jpg', prix : (4).toFixed(2), cat : 'Epices'},
    {id :29, titre : 'Artichauts', image : 'assets/legumes/artichauts.jpg', prix : (4.50).toFixed(2), cat : 'Légumes'},
    {id :30, titre : 'Batavia', image : 'assets/legumes/batavia.jpg', prix : (1.50).toFixed(2), cat : 'Légumes'},
    {id :31, titre : 'Carottes', image : 'assets/legumes/carottes.jpeg', prix : (2.50).toFixed(2), cat : 'Légumes'},
    {id :32, titre : 'Courgettes', image : 'assets/legumes/courgettes.jpeg', prix : (1.70).toFixed(2), cat : 'Légumes'},
    {id :33, titre : 'Endives', image : 'assets/legumes/endives.jpg', prix : (1.60).toFixed(2), cat : 'Légumes'},
    {id :34, titre : 'Epinards', image : 'assets/legumes/epinard.jpg', prix : (5).toFixed(2), cat : 'Légumes'},
    {id :35, titre : 'Fenouil', image : 'assets/legumes/fenouil.jpg', prix : (2).toFixed(2), cat : 'Légumes'},
    {id :36, titre : 'Haricots verts', image : 'assets/legumes/haricots.jpg', prix : (2.30).toFixed(2), cat : 'Légumes'},
    {id :37, titre : 'Laitue', image : 'assets/legumes/laitue.jpeg', prix : (1.50).toFixed(2), cat : 'Légumes'},
    {id :38, titre : 'Navets', image : 'assets/legumes/navets.jpg', prix : (1.30).toFixed(2), cat : 'Légumes'},
    {id :39, titre : 'Oignons rouges', image : 'assets/legumes/oignons_rouges.jpg', prix : (1.70).toFixed(2), cat : 'Légumes'},
    {id :40, titre : 'Oignons', image : 'assets/legumes/oignons.jpg', prix : (1.50).toFixed(2), cat : 'Légumes'},
    {id :41, titre : 'Petits pois', image : 'assets/legumes/petit_pois.jpg', prix : (2).toFixed(2), cat : 'Légumes'},
    {id :42, titre : 'Poireaux', image : 'assets/legumes/poireaux.jpg', prix : (3.33).toFixed(2), cat : 'Légumes'},
    {id :43, titre : 'Poivrons jaunes', image : 'assets/legumes/poivrons_jaunes.jpeg', prix : (1.30).toFixed(2), cat : 'Légumes'},
    {id :44, titre : 'Poivrons rouges', image : 'assets/legumes/poivrons_rouges.jpeg', prix : (1.30).toFixed(2), cat : 'Légumes'},
    {id :45, titre : 'Poivrons verts', image : 'assets/legumes/poivrons_verts.jpg', prix : (1.30).toFixed(2), cat : 'Légumes'},
    {id :46, titre : 'Pommes de terre', image : 'assets/legumes/pomme_de_terre.jpg', prix : (2.10).toFixed(2), cat : 'Légumes'},
    {id :47, titre : 'Salade Chicorée', image : 'assets/legumes/salade_chicoree.jpg', prix : (1.50).toFixed(2), cat : 'Légumes'},
    {id :48, titre : 'Tomates cerises', image : 'assets/legumes/tomates_cerises.jpg', prix : (2).toFixed(2), cat : 'Légumes'},
    {id :49, titre : 'Tomates', image : 'assets/legumes/tomates.jpg', prix : (1.99).toFixed(2), cat : 'Légumes'}
  ];

  productPanier : Array<any> = new Array<any>();
  obsTotal : Subject<any> = new Subject<any>();
  obsQty : Subject<any> = new Subject<any>();
  obsDelete : Subject<any> = new Subject<any>();
  productsSearch : Array<any> = new Array<any>();
obsSearch : Subject<any> = new Subject<any>();
  constructor() { }
}
