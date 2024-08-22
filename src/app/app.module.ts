import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AccessoireBebeFilleComponent } from './pages/accessoire-bebe-fille/accessoire-bebe-fille.component';
import { AccessoireEnfantFilleComponent } from './pages/accessoire-enfant-fille/accessoire-enfant-fille.component';
import { AccessoireComponent } from './pages/accessoire/accessoire.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BebeComponent } from './pages/bebe/bebe.component';
import { ChemiseFemmeComponent } from './pages/chemise-femme/chemise-femme.component';
import { CompteComponent } from './pages/compte/compte.component';
import { DescriptionVetementsComponent } from './pages/description-vetements/description-vetements.component';
import { DescriptionComponent } from './pages/description/description.component';
import { EnfantComponent } from './pages/enfant/enfant.component';
import { FemmeComponent } from './pages/femme/femme.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { HommeComponent } from './pages/homme/homme.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PaniersproduitsComponent } from './pages/paniersproduits/paniersproduits.component';
import { PayementComponent } from './pages/payement/payement.component';
import { PolitiqueUtilisationComponent } from './pages/politique-utilisation/politique-utilisation.component';
import { PullHommeComponent } from './pages/pull-homme/pull-homme.component';
import { SacBebeGarconComponent } from './pages/sac-bebe-garcon/sac-bebe-garcon.component';
import { SacEnfantGarconComponent } from './pages/sac-enfant-garcon/sac-enfant-garcon.component';
import { SacHommeComponent } from './pages/sac-homme/sac-homme.component';
import { SacsComponent } from './pages/sacs/sacs.component';
import { ServiceClientPageComponent } from './pages/service-client-page/service-client-page.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';


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
    PanierComponent,
    ChemiseFemmeComponent,
    PaniersproduitsComponent,
    DescriptionComponent,
    PolitiqueUtilisationComponent,
    DescriptionVetementsComponent,
    PullHommeComponent,
    SacHommeComponent,
    AccessoireEnfantFilleComponent,
    SacEnfantGarconComponent,
    AccessoireBebeFilleComponent,
    SacBebeGarconComponent,
    PayementComponent,
    ServiceClientPageComponent,
    InformationPageComponent,


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
