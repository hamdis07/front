import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HistoriqueComponent } from './historique/historique.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FemmeComponent } from './femme/femme.component';
import { HommeComponent } from './homme/homme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { BebeComponent } from './bebe/bebe.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { SacsComponent } from './sacs/sacs.component';
import { VetementComponent } from './vetement/vetement.component';
import { PanierComponent } from './panier/panier.component';


@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    PagenotfoundComponent,
    HistoriqueComponent,
    SidebarComponent,
    AccueilComponent,
    FemmeComponent,
    HommeComponent,
    EnfantComponent,
    BebeComponent,
    FooterComponent,
    HomeComponent,
    AccessoireComponent,
    SacsComponent,
    VetementComponent,
    PanierComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
