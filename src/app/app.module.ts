import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProductsComponent } from './liste-products/liste-products.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    AccueilComponent,
    MenuComponent,
    CatalogComponent,
    PanierComponent,
    SearchComponent,
    ListeProductsComponent,
    DetailProduitComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
