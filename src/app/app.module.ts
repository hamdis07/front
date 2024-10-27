import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importez ce module
import { MatInputModule } from '@angular/material/input'; // Importez ce module
import { MatDialogModule } from '@angular/material/dialog'; // Importez ce module
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
//import { SacsComponent } from './pages/sacs/sacs.component';
import { ServiceClientPageComponent } from './pages/service-client-page/service-client-page.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
//import { UpdatePanierDialogComponent } from './update-panier-dialog/update-panier-dialog.component';
//import { ProductDetailComponent } from './pages/homme/product-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; // Example of another Material module
import { MatIconModule } from '@angular/material/icon';
import { CommandeComponent } from './pages/commande/commande.component';
import { InformationComponent } from './pages/information/information.component';
import { ReclamerComponent } from './reclamer/reclamer.component';
import { MessageComponent } from './pages/message/message.component';
import { ModifierInformationComponent } from './pages/modifier-information/modifier-information.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PaniermodifierComponent } from './pages/paniermodifier/paniermodifier.component';
import { MesssagerieComponent } from './pages/messsagerie/messsagerie.component';

@NgModule({
  declarations: [

   // ProductDetailComponent,
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
    //SacsComponent,
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
MessageComponent,

   // UpdatePanierDialogComponent,
        CommandeComponent,
        InformationComponent,
        ReclamerComponent,
        MessageComponent,
        ModifierInformationComponent,
        ResetPasswordComponent,ForgotPasswordComponent, PaniermodifierComponent, MesssagerieComponent

  ],
  imports: [
    MatSnackBarModule,MatCardModule,MatIconModule,MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,ReactiveFormsModule,
    MatFormFieldModule, // Ajoutez ce module
    MatInputModule, // Ajoutez ce module
    MatDialogModule// Ajoutez ce module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
