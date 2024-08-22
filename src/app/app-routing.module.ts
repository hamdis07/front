import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', component: HomeComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'paniersproduits', component: PaniersproduitsComponent },
  { path: 'achat_hors_vetement/:id', component: DescriptionComponent },
  { path: 'achat_vetement/:id', component: DescriptionVetementsComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'femme', component: FemmeComponent },
  { path: 'accessoire', component: AccessoireComponent },
  { path: 'accessoire-enfant-fille', component: AccessoireEnfantFilleComponent},
  { path: 'accessoire-bebe-fille', component: AccessoireBebeFilleComponent},
  { path: 'historique', component: HistoriqueComponent },
  { path: 'politique-utilisation', component: PolitiqueUtilisationComponent},
  { path: 'sacs', component: SacsComponent },
  { path: 'homme', component: HommeComponent },
  { path: 'pull-homme', component:PullHommeComponent},
  { path: 'sac-homme', component:SacHommeComponent},
  { path: 'sac-enfant-garcon', component:SacEnfantGarconComponent},
  { path: 'sac-bebe-garcon', component:SacBebeGarconComponent},
  { path: 'enfant', component: EnfantComponent },
  { path: 'bebe', component: BebeComponent },
  { path: 'chemise-femme', component: ChemiseFemmeComponent },
  { path: 'payement', component: PayementComponent },
  { path: 'service-client-page', component:ServiceClientPageComponent},
  { path: 'information-page', component:InformationPageComponent},
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
