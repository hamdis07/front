import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HistoriqueComponent } from './historique/historique.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FemmeComponent } from './femme/femme.component';
import { HommeComponent } from './homme/homme.component';
import { EnfantComponent } from './enfant/enfant.component';
import { BebeComponent } from './bebe/bebe.component';
import { HomeComponent } from './home/home.component';
import { AccessoireComponent } from './accessoire/accessoire.component';
import { SacsComponent } from './sacs/sacs.component';
import { VetementComponent } from './vetement/vetement.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
   {path:'accueil', component:AccueilComponent},
   {path:'', component:HomeComponent},
   {path:'panier', component:PanierComponent},
   {path:'vetement', component:VetementComponent},
  {path:'compte', component:CompteComponent},
  {path:'femme' , component:FemmeComponent},
  {path:'accessoire', component:AccessoireComponent},
  {path:'historique' , component:HistoriqueComponent},
  {path:'sacs', component:SacsComponent},
  {path:'homme' , component:HommeComponent},
  {path:'enfant', component: EnfantComponent},
  {path:'bebe', component:BebeComponent},
  {path:'**', component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
